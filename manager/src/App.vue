<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getPubKey } from '@/api/api'

export default {
  name: 'App',
  mounted() {
    getPubKey().then(res => {
      sessionStorage.setItem('publicKey', res)
    },
    err => {
      console.log(err)
    })
  }
}

</script>

<style>
html,body,#app{
  height: 100%;
}
</style>
