<template>
  <b-container>
    <b-row align-h="between">
      <b-col class="text-left" cols="8">{{username}}</b-col>
      <b-col v-if="followers != -1" class="text-right" cols="4">
        <p><b-icon icon="heart-fill"></b-icon> {{followers}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    props: {
      username: { type:String },
      followers: { type:Number }
    }
  }
</script>
