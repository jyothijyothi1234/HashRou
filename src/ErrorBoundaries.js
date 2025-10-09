import React, { Component } from "react"

class  ErrorBoundariess extends Component{

    constructor(props){

super(props)
   this.state= {hasError:false}
    }


    static getDerivedStateFromError(error){

       return {hasError:true}
    }

    componentDidCatch(error,errorInfo){

console.log("Error catch from Error Boundaries:",error)
console.log("Error catch from Error Boundaries:",errorInfo)

    }

    render(){

        if(this.state.hasError){

            return(

                <div   style={{color:"red",textAlign:"center"}}>
                    <h1> here the error</h1>
                    <h1> this is from server </h1>
                </div>
            )
        }

        return this.props.children

    }

}


export default ErrorBoundariess;