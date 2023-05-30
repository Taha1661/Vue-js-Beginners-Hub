<template>
    <div class="user">
        <h3>{{ data.name }}</h3>
        <h3>{{ data.email }}</h3>
        <button v-on:click="getData(data.name)">Alert User name</button>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: {
        data: Object,
        getData:Function
    },
    
}
</script>

<style>
.user{
    background-color: skyblue;
    border-bottom: 1px solid;
    padding: 10px;
    margin-bottom: 15px;
}
</style>