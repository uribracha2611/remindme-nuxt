<template>
    <div class="max-w-sm shadow-md  bg-gray-300"> 
      <div  class="text-center text-xl text-gray-600 font-semibold mb-2"> case {{props.case_id}}</div>
      <div  class="text-center text-lg font-semibold "> reminder count : {{props.reminder_count}}</div>
        <div class="flex  flex-col justify-center items-center">
          <div class="mt-2 py-4 flex gap-3">
            <div>
       <NuxtLink :to="`cases/${case_id}`" class="bg-blue-500 text-white rounded px-2   py-2 hover:bg-blue-400  " > view case</NuxtLink>
          
        </div>
          <div>
            <button class="bg-blue-500 text-white rounded px-2   py-2 hover:bg-blue-400" @click="DeleteCase"> delete case</button>
          </div>
        </div>
    
    </div>
    </div>
    
    </template>
    
    <script setup lang="ts">

     const props=defineProps(["case_id","reminder_count"])
     let user_store=userStore()
     let reminder_store=reminderStore()
async function DeleteCase()
{
  const {data,error}=  await useFetch(user_store.base_url+`/delete_cases_api`,{headers:{Authorization:"Bearer " + user_store.acsess_token}, method:"Post", body:{
    "id": props.case_id
  }})
 await reminder_store.get_cases()
}
      
    </script>
    
    <style scoped>
    
    </style>