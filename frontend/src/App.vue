<template>
  <div id="app">
    <b-container id="rows">
      <b-row align-h="center" id="search">
        <b-col>
          <SearchBox v-on:childToParent="getUser"/>
        </b-col>
      </b-row>
      <b-row align-h="center" id="userInfo">
        <b-col>
          <UserInfo v-bind:username="username" v-bind:followers="followCount"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import SearchBox from './components/SearchBox.vue'
import UserInfo from './components/UserInfo.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
  data () {
    return {
      username: '', // This value is set to the value emitted by the child
      followCount: -1,
    }
  },
  name: 'App',
  components: {
    SearchBox,
    UserInfo
  },
  methods:{
    getUser(username){
      axios.get(process.env.VUE_APP_BASEURL + "user/" + username)
        .then(res => {
          const data = res.data;
          this.username = data.display_name;
          this.followCount = data.followers;
        })
        .catch(err => {
          console.log(err.message);
          this.username = "Error: No user found with this name."
          this.followCount = -1;
        })
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 350px;
}
#rows {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width:50%;
}
#search {
}
#userInfo {
  padding-top: 20px
}
</style>
