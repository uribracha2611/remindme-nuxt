<template>
<div>

<div class="mt-24">
  <div class="  bg-gray-300  rounded overflow-hidden shadow-lg w-1/2 mx-auto">
    <div class="mx-3 ">
    <div class="text-2xl text-center text-gray-700 font-semibold"> remindMe  </div>
    <div class="text-xl text-center"> 
      manange your Reminders with remindMe.
    </div>
    <div class="w-full flex "> 
    <div class="mx-auto py-4 flex gap-3">
      <button class="bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-400">  learn more</button>
       <button class="bg-blue-500 text-white rounded px-3  py-2 hover:bg-blue-400">  Register</button>
    </div>
    </div>
    </div>

</div>
  
</div>
<div class="grid grid-auto-fit gap-3 mt-20  lg:ml-20 md:ml-15 sm:ml-10">
<div>
  <HomeCard icon="plus" title="add Reminders" Button="go to add reminders" description="adding a new reminder requires a case number, title, description and date"></HomeCard>
</div>
<div>
  <HomeCard icon="briefcase" title="Cases" Button="See cases" description="reminders can be orginizied by cases "> </HomeCard>
</div>
<div>
  <HomeCard icon="plus" title="calender" Button="go to calender" description="filter reminder  by date "></HomeCard>
</div>
</div>
</div>

</template>

<script setup >



definePageMeta({
  name:"home"
})

</script>

