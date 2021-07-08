import supabase from './Connection'

class AccountService{
    CheckActiveUser(){
        return supabase.auth.session()
    }
    async Signin(user,errorRef){
        const {error} = await supabase.auth.signIn(user)
        if(error){
            errorRef(error)
            return;
        }
    }
    async Signout(errorRef){
        const {error} = await supabase.auth.signOut()
        if(error){
            errorRef(error)
            return;
        }
    }
    async Signup(user,errorRef){
        const {error} = await supabase.auth.signUp(user)
        if(error){
            errorRef(error)
            return;
        }
    }
    SessionChange(userCB,authCB,history,detailsCB){
        const {listener} = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if(event==="SIGNED_IN"){
                    userCB(session)
                    this.GetUserDetails(session.user.id,detailsCB,history)
                    authCB(true)
                }else{
                    userCB(null)
                    history.push("/signin")
                    authCB(false)
                }
                
            }
        )
        return listener;
    }
    async SetActiveStatus(id,errorRef){
        const {error } = await supabase.from('userdetails').update({ activestatus_id: 1 }).eq('userdetails_id', id)
        if(error){
            errorRef(error)
            return;
        }
    }
    async GetUserDetails(id,detailsRef,history){
        let { data: UserDetails, error } = await supabase.from('userdetails').select('*').match({id:id})
        if(error){
            return;
        }
        if(UserDetails.length===0){
            history.push('/completionpage')
        }else{
            this.SetActiveStatus(UserDetails[0].userdetails_id,(x)=>{
                console.log(x)
            })
        }
        detailsRef(UserDetails)
    }
}
const accService = new AccountService()

export default accService;