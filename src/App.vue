<template>
  <div class="ui inverted menu">
      <router-link to="/"><a class="item"><img src="./assets/logo.png" width="30" height="30"></a></router-link>
      <router-link to="/" style="text-decoration: none; font-size:15px;"><a class="item">Contact</a></router-link>
      <div class="right menu">
        <router-link to="/login"><a class="item"><i class="large user alternate icon"></i></a></router-link>
      </div>
  </div>
  <div class="container"> 
      <router-view/>
  </div>
</template>


<script>
  export default {
  name: 'App',
  components: {
    
  }
}
</script>
