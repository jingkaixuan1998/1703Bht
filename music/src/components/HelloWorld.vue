<template>
  <div>
    <router-view></router-view>
    <router-link  to='/home/a' tag="a">aa</router-link>
    <router-link  to='/home/b' tag="a">aa</router-link>
    <!-- <router-link  to='/home/c' tag="a">aa</router-link> -->
    <p @click="fun">aa</p>
  </div>
</template>
<script>
export default {
  methods:{
    fun(){
      console.log(1)
      console.log(this.$router)
      this.$router.push({path:'/home/b',query:{a:'a'}})
    }
  }
}
</script>
