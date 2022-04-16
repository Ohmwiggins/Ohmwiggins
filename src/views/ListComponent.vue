<template>
    <div class="border" style="border-radius: 5px; padding: 20px">
        <div class="ui teal segment">
            <div class="ui fluid action input">
                <div class="ui teal ribbon label" style="font-size: 15px">Contacts</div>
                <input type="text" class="form-control" placeholder="Search..." v-model="search">
                <div @click="SEARCH()" class="ui button">Search</div>
                <div class="ui orange button"><router-link to="/create" style="color:white; text-decoration: none;">+ Add</router-link></div>
            </div>
        </div>

        <div class="border" style="border-radius: 5px; padding: 15px">
            <div class="ui grid">
                <div class="four wide column" v-for="user_alias in filterUsers">
                    <div class="ui card">

                            <div class="image">
                                <img  class="card-img-top" :src="user_alias.imageUrl" alt="Card image cap" @error="replaceByDefault">
                            </div>
                            <div class="content">
                                <h5 class="header" style="font-weight: bold;">{{user_alias.firstname}} {{user_alias.lastname}}</h5>
                                <p style="color:rgb(128,128,128)">
                                    Mobile: {{user_alias.mobile}}<br>
                                    Email: {{user_alias.email}}<br>
                                    Facebook: {{user_alias.facebook}}<br>                            
                                </p>   
                            </div>
                            <div class="extra content">
                                <div class="ui column centered grid" style="padding:10px">  
                                    <button class="big ui blue compact icon button">
                                        <router-link :to="{ path: 'edit', name: 'Edit', params:{cid: user_alias.cid} }"><span>
                                        <i class="inverted edit icon"></i></span></router-link>
                                    </button>
                                    <button @click="DELETE(user_alias.cid)" class="big ui red compact icon button"><i class="eraser icon"></i></button>                                        
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Users',
    props: {

    },
    data() {
        return {
            search: '',
            Users: [],
            uid: '',
            filterUsers: []
        }
    },
    mounted() {
        axios.get('http://localhost:5000/contacts')
        .then((reponse)=>{
            console.log(reponse.data)
            this.Users = reponse.data
            this.filterUsers = reponse.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    methods: {
		DELETE(id){
            axios.delete('http://localhost:5000/contacts/'+id)
            .then(()=>{
                console.log('Delete User ID: '+ id)
            })
            .catch((error)=>{
                console.log(error)
            })
          window.location.reload()
        },
        SEARCH(){
            this.filterUsers = this.Users.filter((user)=> user.firstname.toLowerCase().match(this.search.toLowerCase()))
        },
        replaceByDefault(e) {
/*             const img =  ['https://fomantic-ui.com/images/avatar/large/justen.jpg',
                            'https://fomantic-ui.com/images/avatar/large/chris.jpg',
                            'https://fomantic-ui.com/images/avatar/large/jenny.jpg',
                            'https://fomantic-ui.com/images/avatar/large/nan.jpg',
                            'https://fomantic-ui.com/images/avatar/large/stevie.jpg',
                            'https://fomantic-ui.com/images/avatar/large/veronika.jpg',
                            'https://fomantic-ui.com/images/avatar/large/steve.jpg',
                            'https://fomantic-ui.com/images/avatar/large/elliot.jpg',
                            'https://fomantic-ui.com/images/avatar/large/helen.jpg',
                            'https://fomantic-ui.com/images/avatar2/large/matthew.png',
                            'https://fomantic-ui.com/images/avatar2/large/molly.png',
                            'https://fomantic-ui.com/images/avatar2/large/elyse.png']
            const random = Math.floor(Math.random() * img.length); */
            e.target.src = 'https://th.jobsdb.com/th-th/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
        }
    },
}
</script>

<style scoped>

</style>