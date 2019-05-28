import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import './userlayout.css';


export default function(ComposedClass, reload, adminRoute = null) {
   class AuthCheck extends Component {

    state= {
        loading: true
    }

    componentDidMount(){
        axios.get("http://localhost:3000/api/auth")
        .then(res => {
            let user = res.data;
            if(!user.isAuth){
               if(reload){
                   this.props.history.push('/login')
               }
            }else{
                if(adminRoute && !user.isAdmin){
                    this.props.history.push('/user/dashboard')
                }else{
                    if(reload===false){
                   this.props.history.push('/user/dashboard')
                }
               }
            } 
            console.log(user)
            this.setState({
                loading: false
            })
        })
    }

    render() {
        if(this.state.loading){
            return (
                <div className='main_loader'>
                    <CircularProgress style={{color: '#2196F3'}} thickness={7} />
                </div>
            )
        }
        return (
            <ComposedClass {...this.props} user={this.props.user}/>
        )
    }
  }
  return AuthCheck;

}
