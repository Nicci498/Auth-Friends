import React from 'react';
import axios from 'axios';

class LogIn extends React.Component {
    state= {
        credentials :{
            username: '',
            password: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(r => {
            console.log('axios in login', r);
            localStorage.setItem('token', r.data.payload)
            this.props.history.push('/friends')
        })
        .catch(e =>{
            console.log('axios in login', e)
        })
    }
    render(){
        return(
            <form onSubmit={this.login}>
                <h2>Log In</h2>
                <input type='text' name='username' placeholder='username' value={this.state.credentials.username} onChange={this.handleChange}></input> 
                <input type='password' name='password' placeholder='password' value={this.state.credentials.password} onChange={this.handleChange}></input> 
                <button type='submit'>Log in</button>
            </form>
        )
    }
}

export default LogIn;