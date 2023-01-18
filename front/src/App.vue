<template>
  <NavBar />
  <router-view />

</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components:{
    NavBar

  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>