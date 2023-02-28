<template>
 <div class="mt-5">
        <div class="  bg-gray-300  rounded overflow-hidden shadow-lg w-1/2 mx-auto p-3">
    <div class="mx-3 ">
    <div class="text-2xl text-center text-gray-700 font-semibold"> Login  </div>
    </div>
    </div>
    <div class="flex w-full mt-3">
      <div class="mx-auto max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="Login">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" v-model="username" >
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="password">
    </div>
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">  Submit</button>

    </div>
    <!-- <div class="p-3 bg-gray-500 font-semibold text-center text-white mt-3" v-if="status!=''">
  {{status}} 
  </div>  -->
  </form>
  </div>
  </div>
  </div>
</template>

<script setup>

const username = ref("")
const password = ref("")
const store=userStore()
const status=ref("")
 function Login(event){
    let result=store.Login(username.value,password.value)
    if(!result){
      status.value="Wrong username or password"
    }
}
//  async function Login(){
//    console.log("hello")
// }
</script>

<style lang="scss" scoped>

</style>