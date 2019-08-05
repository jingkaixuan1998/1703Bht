<template>
    <div>
        <!-- {{props}} -->
    <p @click=fun>assa</p>
    </div>
</template>
<script>
export default {
    methods:{
        fun(){
            console.log(this.$route.query.a)
        }
    }
}
</script>