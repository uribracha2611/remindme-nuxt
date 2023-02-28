<template>
 <div class="mt-5">
        <div class="  bg-gray-300  rounded overflow-hidden shadow-lg w-1/2 mx-auto p-3">
    <div class="mx-3 ">
    <div class="text-2xl text-center text-gray-700 font-semibold"> Add Reminder  </div>
    </div>
    </div>
    <div class="flex w-full mt-3">
      <div class="mx-auto max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="Add">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="reminder">
        reminder
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="reminder" v-model="reminder" >
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="case_id">
    case id    
    </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"  v-model="case_id">
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
import {userStore} from "@/composables/User"
 const reminders = reminderStore() 
 
definePageMeta({
  name:"add reminder"
})
const summery= ref("")
const reminder= ref("")
const case_id= ref("")
const due_date=ref("")
const status=ref("")
async function Add(){
    
    const result= await reminders.add_reminder(reminder.value,summery.value,case_id.value,due_date.value)
    if(result){
        status.value="reminder added"
    }
    else{
        status.value="there was an error"
    }
}


</script>

<style scoped>

</style>