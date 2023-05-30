<template>
  <!-- Router -->
 <!-- <router-link to="/">Home</router-link><br>
 <router-link  to="/login">Login</router-link><br>
 <router-link  to="/profile/taha">Taha Profile</router-link><br>
 <router-link  to="/profile/ajay">Ajay Profile</router-link><br>
 <router-link  to="/profile/vaishal">Vaishal Profile</router-link><br>
 <router-view/> -->

 <!-- APIs -->
 <!-- <h1>
  Call for api
 </h1>
 <ul class="item" v-for="item in list" :key="item.id">
  <li>{{ item.id }}</li>
  <li>{{ item.email }}</li>
  <li>{{ item.first_name }}</li>
  <li><img :src="item.avatar" ></li>
 </ul> -->

 <h1>POST Method API </h1>
 <!-- <label for="email">Email</label><br>
 <input type="text" name="email" v-model="email"><br><br>
 <label for="password">Password</label><br>
 <input type="password" name="password" v-model="password"><br><br>
 <button v-on:click="addUser()">Add new user</button> -->

<ActiveBoot/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue';
import axios from 'axios';
import ActiveBoot from './components/ActiveBoot.vue';

export default {
  name: 'App',
  // data(){
  //   return{
  //     list:[],
  //     email:'',
  //     password:''
  //   }
  // },
  // methods:{
  //   async addUser(){
  //     let answer = await axios.post('http://localhost:3000/user',{
  //       email:"",
  //       password:""
  //     })
  //     console.warn('funtion called',this.email,this.password)
  //     console.log(answer)
  //   }
  // },
  // async mounted()
  // {
  //   let result =  await axios.get("https://reqres.in/api/users?page=1");
  //   console.warn(result.data.data)
  //   this.list=result.data.data
  // }

  components:{
    ActiveBoot
  }
}
</script>

<style>
.item{
  display:flex;
}
.item img{
  width:50px;
}
.item li{
  display: inline-block;
  border: 1px solid;
  width: 180px;
  text-align: center;
  padding: 5px;
}
</style>
