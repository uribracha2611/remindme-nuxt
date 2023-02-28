import { CasesInter, RemindersInter } from './types'
import {  userStore as actionStore } from './User'


export const reminderStore=definePiniaStore("Reminders",{
    state:()=>({

            cases:Array<CasesInter>(),
            current_reminders:Array<RemindersInter>(),
            base_url:useRuntimeConfig().public.base_url

        
    }),
    actions:{


       async add_reminder(reminder:string,summery:string,case_id:string,due_date:string)
   {
    const user_data= userStore()
      const    {data,error}=  await useFetch(this.base_url+"/add_api",{method:"Post",body:{
          "reminder": reminder,
          "case_id": case_id,
          "summery":summery,
          "due_date":due_date,
      },
      headers:{Authorization:"Bearer " + user_data.acsess_token}

   })
   if(data.value.statusCode==200){
    return true
   }
   else{
    return false
   }
  },


       async get_cases()
   {
    const user_data= userStore()
      const    {data,error}=  await useFetch(this.base_url+"/cases_api",{headers:{Authorization:"Bearer " + user_data.acsess_token}})
    if(data.value.statusCode==200){
    this.cases=data.value.cases
    return data.value.cases
   }
   else{
    return false
   }
  },
  async Get_reminder(id:number | string){
    const user_data= userStore()

      const {data,error}=  await useFetch(this.base_url+`/reminder_api?case=${id.toString()}`,{headers:{Authorization:"Bearer " + user_data.acsess_token}})
      console.log(data.value)
    if(data.value.statusCode==200){
    this.current_reminders=data.value.reminder
    return data.value.reminder
   }
   else{
    return false
   }
  }
    }

})

