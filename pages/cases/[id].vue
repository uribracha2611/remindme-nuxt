<template>
     <div class="mt-4" >
        <div class="  bg-gray-300  rounded overflow-hidden shadow-lg w-1/2 mx-auto p-3 mb-4">
    <div class="mx-3 ">
    <div class="text-2xl text-center text-gray-700 font-semibold"> Cases  </div>
    </div>

        </div>
    <div  class="grid grid-cols-3 gap-3 mx-3">
        <reminderview v-for="Reminder in Reminder_page" :id="Reminder.id" :key="Reminder.id.toString()" :case_id="Reminder.caseid" :due_date="Reminder.due_date" :task="Reminder.task" :summary="Reminder.summery"></reminderview>
       
    </div>
</div>
</template>

<script setup lang="ts">
 const {id}=useRoute().params 
 const store=reminderStore()
 store.Get_reminder( id as string )
 
let page = ref(1)
let per_page= ref(9)
let Reminder_page=computed(() => store.current_reminders)
definePageMeta({
    
})
</script>

<style scoped>

</style>