<template>
<div>
<div class="max-w m-1 rounded bg-gray-800 py-4">
  <div class="container ml-2 flex justify-between text-white">
    <span class="text-xl font-bold text-white">Remindme</span>
    <ul class="flex-end flex gap-3 self-end text-lg font-semibold mr-3">
      <li class="font-semibold" v-if="Userstore.IsloggedIn"> welcome {{Userstore.logged_user}}</li>
      <li class="hover:text-red-500 font-semibold" v-for="route in used_route" :key="route.path" >
        <NuxtLink :to="route.path"> {{route.name}}</NuxtLink>
        </li>
        
        <li v-if="Userstore.IsloggedIn">
        <button @click="logout" class="hover:text-red-500 font-semibold text-center px-1 "> logout </button>
        </li>
    
    </ul>

  </div>
  </div>
  </div>
</template>

<script setup>
import {userStore} from "../composables/User"

const login_only=["/addReminder","/cases","/calender"]
const logout_only=["/register","/login"]
const Userstore=userStore()
function logout(){
  Userstore.logout()
}


function filter_routes(){
  let routes=useRouter().getRoutes()
  routes=routes.filter((route)=>route.path!="/cases/:id")
  routes=routes.filter((route)=>route.path!="/edit/:id")
  if( !Userstore.IsloggedIn){
    routes=routes.filter((route)=>!login_only.includes(route.path))
  }
  else{
    routes=routes.filter((route)=>!logout_only.includes(route.path))
  }

  return routes
}
const used_route= computed(()=>filter_routes())
</script>

<style lang="scss" scoped>

</style>