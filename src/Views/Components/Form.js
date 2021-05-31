import React from 'react'
import '../Styles/FormStyle.css'
export class Form extends React.Component{
    HandleFormRequirements(req){
        return req.map(
            (value)=>(
                <>
                    <label>{value.toUpperCase()+":"}</label>
                    <input name={value} type={value}/>
                </>
            )
        )
    }
    render(){
        return(
            this.props.formType==='registration'?<form>
                {this.HandleFormRequirements(this.props.req)}
                <button>Signup</button>
            </form>:<form>
                {this.HandleFormRequirements(this.props.req)}
                <button>Signin</button>
            </form>
        );
    }
}