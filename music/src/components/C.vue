<template>
    <div>
    <p @click=fun>assa</p>
        C
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