<template>

    <div class="mt-4" >
        <div class="  bg-gray-300  rounded overflow-hidden shadow-lg w-1/2 mx-auto p-3 mb-4">
    <div class="mx-3 ">
    <div class="text-2xl text-center text-gray-700 font-semibold"> Cases  </div>
    </div>

        </div>
    <div  class="grid grid-cols-3 gap-3 mx-3">
        <CaseView v-for="Case in cases_page" :key="Case.caseid" :case_id="Case.caseid" :reminder_count="Case.count" ></CaseView>
       
    </div>
</div>

</template>

<script setup lang="ts">
import CaseView from '~~/components/caseview.vue';

let page = ref(1)
let per_page= ref(9)
let cases_page=computed(() => Reminder.cases.slice((page.value-1)*per_page.value,page.value*per_page.value))


definePageMeta({
    name:"cases",
    
})


 const Reminder=reminderStore()
</script>

<style scoped>

</style>