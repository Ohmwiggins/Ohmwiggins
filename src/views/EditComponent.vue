<template>
<div class="ui two column centered grid">
    <div class="column">
        <div class="ui segments">
            <div class="ui segment" style="padding-bottom:35px">
                <p class="label" style="font-size: 20px;">Contact</p>
                <button class="orange ui label" style="margin-left: 10px;">Edit</button>
            </div>
            <div class="ui segment">
                    <form class="ui form info">
                        <div class="field">
                            <div class="labels">Contact ID</div>
                            <input type="text" v-model="contact.cid" placeholder="Contact ID" required/>
                        </div>

                        <div class="field">
                            <div class="labels">First Name</div>
                            <input type="text" v-model="contact.firstname" placeholder="First Name" required/>
                        </div>

                        <div class="field">
                            <div class="labels">Last Name</div>
                            <input type="text" v-model="contact.lastname" placeholder="Last Name" required/>
                        </div>

                        <div class="field">
                            <div class="labels">Mobile No</div>
                            <input type="text" v-model="contact.mobile" placeholder="Mobile No" required/>
                        </div>

                        <div class="field">
                            <div class="label">Email</div>
                            <input type="text" v-model="contact.email" placeholder="Email" />
                        </div>

                        <div class="field">
                            <div class="label">Facebook</div>
                            <input type="text" v-model="contact.facebook" placeholder="Facebook" />
                        </div>

                        <div class="field">
                            <div class="label">Image Url</div>
                            <input type="text" v-model="contact.imageUrl" placeholder="Image Url" />
                        </div>
                        <br>
                        <div class="ui column centered grid" style="margin-bottom:10px">  
                            <div class="ui buttons">
                                <button @click="updateToAPI" class="ui blue basic button"><i class="save outline icon" ></i>Save</button>
                                <button class="ui blue basic button active"><router-link to="/list" style="text-decoration: none;"><i class="times icon red"></i>Close</router-link></button>
                            </div>
                        </div>

                    </form>                        
            </div>
        </div>
    </div>
</div>
<div class="container"> 
    <router-view/>       
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            contact: {
                cid: '',
                firstname: '',
                lastname: '',
                mobile:'',
                email:'',
                facebook:'',
                imageUrl:''
            }    
        }
    },
    mounted() {
        axios.get('http://localhost:5000/contacts/'+this.$route.params.cid)
        .then((response)=>{
            alert(response.data.length)
            this.contact = response.data
        })
        .catch((error)=>{
            console.log(error)
            alert(error)
        })
    },
    methods: {
        updateToAPI(){
            if(this.contact.cid !== '' && this.contact.firstname !== '' && this.contact.lastname !== '' && this.contact.mobile !== ''){
                console.log(this.$route.params.cid)
                let newContact = {
                    cid: this.contact.cid,
                    firstname: this.contact.firstname,
                    lastname: this.contact.lastname,
                    mobile: this.contact.mobile,
                    email: this.contact.email,
                    facebook: this.contact.facebook,
                    imageUrl: this.contact.imageUrl
                }
                console.log(newContact)
                
                axios.post('http://localhost:5000/contacts/'+this.$route.params.cid, newContact)
                .then((response)=>{
                    console.log(response.data)
                    window.location = "/list"
                    //this.$router.replace('/users')
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
    },  
}
</script>

<style scoped>
.label {
  font-weight: bold;
  float: left;
}
.labels {
  font-weight: bold;
  float: left;
}
.labels::after {
  content: "*";
  color: red;
  margin-left:2px
}
.ui button {
  float: left;
}

</style>