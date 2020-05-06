<template>
  <b-container>
    <b-row align-h="between">
      <b-col class="text-left" cols="6"><h5>{{username}}</h5></b-col>
      <b-col v-if="followers != -1" class="text-right" cols="6">
        <p class="h5 mb-2"><b-icon icon="heart-fill"></b-icon> {{followers}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    components:{
    },
    props: {
      username: { type:String },
      followers: { type:Number }
    }
  }
</script>
