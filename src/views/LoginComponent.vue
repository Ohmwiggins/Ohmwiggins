<template>
    <div class="ui two column centered grid" style="margin:20px;">
      <div class="border" style="border-radius: 5px; padding: 20px">
        <div class="column">
            <div class="ui teal segment" style="height:70px;">
                <div class="ui teal ribbon label" style="font-size: 15px">Login</div>
            </div> 

            <form class="ui form">
              <div class="field">
                <div class="label">User Account</div>
                <input type="text" v-model="UserInfo.username" placeholder="User Account" />
              </div>
                      
              <div class="field">
                <div class="label">Password</div>
                <input type="password" v-model="UserInfo.password" placeholder="Password" />
              </div>
                <button class="ui button" type="submit" @click="signIn">Login</button>
            </form>
                 
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
/* import App from '../App.vue' */

export default {
/*   components: { App },
    name: 'Login', */
  data () {
    return {
      UserInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
      signIn () {   
        var auth = 0   
        axios.get('http://localhost:5000/users/'+this.UserInfo.username+'/'+this.UserInfo.password)
        .then((response)=>{
            if(response.data.length===1){
              window.location = "/list"
            } 
            else{
              alert("Invalid Username & Password")
            }
        })
        .catch((error)=>{
            alert("Please Enter  Username & Password")
            console.log(error)
        })
        
      }
  },
}
</script>

<style scoped>
.label {
  font-weight: bold;
  float: left;
}
.ui button {
  float: left;
}
</style>
