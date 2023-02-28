
<template>
 <div class="mt-5">
        <div class="  bg-gray-300  rounded overflow-hidden shadow-lg w-1/2 mx-auto p-3">
    <div class="mx-3 ">
    <div class="text-2xl text-center text-gray-700 font-semibold">  Edit Reminder  </div>
    </div>
    </div>
    <div class="flex w-full mt-3">
      <div class="mx-auto max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="Edit">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="reminder">
        reminder
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="reminder" v-model="task" >
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="case_id">
    case id    
    </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"  v-model="caseid">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="summery">
        summery    
    </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="summery" type="text"  v-model="summery">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="summery">
        due_date    
    </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="summery" type="date"  v-model="due_date">
    </div>
    <div class="flex items-center justify-between">
      <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Submit"/>

    </div>
    <div class="p-3 bg-gray-500 font-semibold text-center text-white mt-3" v-if="status!=''">
  {{status}}
  </div> 
    </form>
    </div>
  
    </div>
    </div>
</template>

<script setup lang="ts">
import {RemindersInter } from '@/composables/types'
  const {id}=useRoute().params 
  const store=reminderStore()
  

  const  current_reminder : RemindersInter =  store.current_reminders.filter((reminder)=> reminder.id==id)[0]


  let caseid=ref (current_reminder.caseid)

  let task=ref (current_reminder.task)

  let summery=ref (current_reminder.summery)
  let due_date=ref (parse_date(current_reminder.due_date))


  let status=ref("")
  const user_data= userStore()
  const reminder_data=reminderStore()

  function parse_date(date:string){
    let corrected_date=date.replaceAll(String.fromCharCode(160),String.fromCharCode(32))
  return new Date(Date.parse(corrected_date)).toISOString().split('T')[0]
  }
  function Edit(){
    status.value=""
    const {data,error}=useFetch(`${store.base_url}/update_reminder_api`,{ 
      method:"Post",
      body:{
        "id": id,
        "caseid":caseid,
        "task":task,
        "due_date": due_date,
       "summery":summery
       },
       headers:{Authorization:"Bearer " + user_data.acsess_token}
  })
  reminder_data.get_cases()
  status.value="edited reminder"
}
</script>

<style scoped>

</style>