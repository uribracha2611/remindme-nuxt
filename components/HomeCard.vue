<template>
    <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-3 mx-3 bg-gray-300 ">
                <div class="flex flex-col justify-center items-center">
                    <div class="self-center ">
                        <font-awesome-icon  :icon="`fa-${props.icon}`"  class="fa-2xl text-blue-500"/>
                    </div>

                </div>
                <div class="text-xl text-center font-semibold text-gray-600 ">
                    {{props.title}}
                </div>
                <div class="text-lg text-center">
                    {{props.description}}
                  
                </div>
                <div class="flex  flex-col justify-center items-center">
                    <div>
                    <button class="bg-blue-500 text-white rounded px-3  py-2 hover:bg-blue-400 mt-2">{{props.Button}}</button>
                </div>
                </div>
            </div>
            
        </div>
    
</template>

<script setup lang="ts">
const props = defineProps (["icon",  "title","description","Button"])
</script>

<style lang="scss" scoped>

</style>