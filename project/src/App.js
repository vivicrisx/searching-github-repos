import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Repos from './Components/Repos/Repos'

class App extends Component{

    state = {
      user: "",
      repositorios: [],
      error: "",
      loading: false,
    }

    changeUser = user =>{
      this.setState({user})
    }
    
    searchUser = async () => {
      const {user} = this.state
      this.setState({loading: true})

      try{
        const {data: repositorios} = await axios.get(`https://api.github.com/users/${user}/repos`)
      

        this.setState({repositorios, error: " ", loading: false})
      } catch(error){
        this.setState({
          error: "Usuário não encontrado",
          loading: false,
          repositorios: []
          
        })
      }

      axios.get(`https://api.github.com/users/${user}/repos`)
      .then(data => {
        console.log('return', data)
      })
      .catch(error => console.log(error))

    }

  render(){

    const {user, repositorios, error, loading} = this.state

    
    return(
      <div className="App">
        <Header/>
        <Form  changeUser={this.changeUser} 
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}   
        />

        <Repos repos = {repositorios}/>
      </div>
    )
  }
}

export default App;
