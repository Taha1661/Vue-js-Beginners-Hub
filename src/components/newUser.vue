<template>
    <h2>Data passing</h2>
    <button v-on:click="getUserName(userName)">Send user name to parent</button>
</template>
<script>
export default {
    name:'newUser',
    data(){
        return{
            userName:"Taha"
        }
    },
    props:{
        getUserName:Function
    }
}
</script>