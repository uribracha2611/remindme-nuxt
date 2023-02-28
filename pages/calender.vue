<template>
    <div>
        <div class="mt-5">
        <div class="  bg-gray-300  rounded overflow-hidden shadow-lg w-1/2 mx-auto p-3">
    <div class="mx-3 ">
    <div class="text-2xl text-center text-gray-700 font-semibold"> Calender  </div>
    </div>
    </div>
    </div>
    <div class="text-2xl text-center font-semibold ">
        choose a date
    </div>
    <div class="mx-auto max-w-sm">
    <form class="max-w-sm">
        <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="summery">
        due_date    
    </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="summery" type="date"  v-model="due_date">
    </div>
    </form>
    
</div>
<div  class="grid grid-cols-3 gap-3 mx-3">
        <reminderview v-for="Reminder in calender_reminder" :id="Reminder.id" :key="Reminder.id.toString()" :case_id="Reminder.caseid" :due_date="Reminder.due_date" :task="Reminder.task" :summary="Reminder.summery"></reminderview>
       
    </div>
    </div>
</template>

<script setup lang="ts">
import { RemindersInter } from '~~/composables/types';

 const due_date=ref("")
 const calender_reminder=ref(Array<RemindersInter>())
const user_data=userStore()
  watch(due_date, async (value)=>{

    const    {data,error}=  await useFetch(user_data.base_url+`/calenderreminder_api?due_date=${due_date.value}`,{headers:{Authorization:"Bearer " + user_data.acsess_token}})
    calender_reminder.value=data.value.reminder
   })
</script>

<style scoped>

</style>