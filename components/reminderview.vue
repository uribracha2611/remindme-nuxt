<template>
        <div class="max-w-sm shadow-md  bg-gray-300"> 
      <div  class="text-center text-xl text-gray-600 font-semibold mb-2">  {{props.task}}</div>
      <div  class="text-center text-lg font-semibold ">  {{props.summary}}</div>
      <div  class="text-center text-lg font-semibold "> due date : {{format_due_date}}</div>
      <div  class="text-center text-lg font-semibold "> case is {{props.case_id}}</div>
      <div class="flex flex-gap 3">
        <div>
        <button class="bg-blue-500 text-white rounded px-2   py-2 hover:bg-blue-400" @click="DeleteReminder"> delete reminder</button>
      </div>
        <div>
        <NuxtLink class="bg-blue-500 text-white rounded px-2   py-2 hover:bg-blue-400" :to="`/edit/${props.id}`"> edit reminder</NuxtLink>
      </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import moment from 'moment'; 
const props=defineProps(["id","task","summary","due_date","case_id"])
let reminder_store=reminderStore()
let user_store=userStore()
async function DeleteReminder()
{
  const {data,error}=  await useFetch(user_store.base_url+`/delete_reminder_api`,{headers:{Authorization:"Bearer " + user_store.acsess_token}, method:"post", body:{
    id: props.id
  }})
 await reminder_store.get_cases()
 await reminder_store.Get_reminder(props.case_id)
}
 function  formatdate (date) {
    moment.locale("he")
    return moment(date).format('MMMM Do YYYY');
  }
  const format_due_date=formatdate(props.due_date)
</script>

<style scoped>

</style>