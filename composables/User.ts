

 export const userStore=definePiniaStore("UserStore",{
    
    state:()=>{

        return{
        logged_user:"",
        acsess_token:null,
        base_url:"http://UriBracha.pythonanywhere.com"

        }
    },
    actions:{
        async Login(username:string,password:string){
            if(username !="" && password !=""){

                const    {data,error}=  await useFetch(this.base_url+"/login_api",{method:"Post", body:{
                "username": username,
                "password":password
                } ,headers:{
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                }
                })
                if(!error.value){
                    if(data.value.statusCode!=400)
                    {
            
                    
                        this.logged_user=username
                        this.acsess_token=data.value.acsess_token
                         await reminderStore().get_cases()
                        let router=useRouter()
                        router.push({"name":"home"})
                        
                        return true


                    }
                    else{
                        return false
                    }

            }
              }
              
         },
         logout(){
            this.logged_user=""
            this.acsess_token=null
            let router=useRouter()
            router.push({"name":"login"})
         }
      
    },
    getters:{
        IsloggedIn: (state)=> state.acsess_token!=null
    },
    
    
})