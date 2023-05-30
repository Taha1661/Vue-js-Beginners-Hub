<template>
    <!-- Methods , Functions , Arguments etc -->

    <!-- <h1>Home {{ "Hello".length }}</h1>
    <h3>Email :{{ email }}</h3>
    <h3>Mobile :{{ mobile }}</h3>
    <h3>Name :{{ getName() }}</h3> // Can pass functions also
    <h3>Age :{{ getAge("23") }}</h3> // Can pass funtion with argument
    <h3>Sport 1 :{{ getSport() }}</h3>
    <h3>Height :{{ getHeight("173cm") }}</h3> //methods with argument 
    <h3>Height :{{ getHeight("178cm") }}</h3>
    <h3>Other name :{{ getData().name }}</h3> // mehtods with multiple object ype data-->

    <!-- Buttons and their different click events -->

    <!-- <h1 v-on:mousemove="getConsole()">Home </h1>
    <button v-on:click="getdata()">Click me</button>
    <button v-on:click="getdata2('button clicked')">Click me</button>
    <button v-on:dblclick="getdata()">Click me twice</button>
    <h2>{{ count }}</h2> -->

    <!-- Two way binding -->

    <!-- <input type="text" v-model="data"/>
    <h2>{{ data }}</h2> -->

    <!-- How to get value from input fields -->

    <!-- <input type="text" placeholder="Enter your email" v-model="email"/>
    <br>
    <br>
    <input type="password" placeholder="Enter your password" v-model="password"/>
    <br>
    <br>
    <button type="button" v-on:click="getData()">Get Data</button> -->

    <!-- How to get values from checkbox and radio button  -->

    <!-- <h3>Technology</h3>
    <label for="java">Java</label>
    <input type="checkbox" value="java" id="java" v-model="technology">

    <label for="python">Python</label>
    <input type="checkbox" value="python" id="python" v-model="technology">

    <label for="node">Node</label>
    <input type="checkbox" value="node" id="node" v-model="technology">
    <h4>Technology : {{ technology }}</h4>

    <br><br>
    <h3>Proffesion</h3>
    <label for="student">Student</label>
    <input type="radio" value="student" id="student" name="profession" v-model="profession">

    <label for="developer">Developer</label>
    <input type="radio" value="developer" id="developer" name="profession" v-model="profession">
    <h4>Profession : {{ profession }}</h4> -->

    <!-- If-else condition -->

    <!-- <h1 v-if="show">Conditions in vue js</h1>
    <h1 v-else>Else condition in vue</h1>
    <button v-on:click="show=!show">Change</button> -->

    <!-- For loop and applying in array  -->

    <!-- <ul>
        <li v-for="item in technology" :key="item">{{ item }}</li>
    </ul>
    <br><br>
    <ul>
        <li v-for="item in users" :key="item.name">{{ item.name }} : {{ item.email }}</li>
    </ul> -->

    <!-- Pass data to child component -->
    <!-- <Child :name="name" :data="user" :getData="getData" /> -->

    <!-- Reuse a component -->
    <!-- <ul>
        <li v-for="item in users" :key="item.name">
            {{ item.name }} --- {{ item.email }}
        </li>
        <br><br>
        <li v-for="item in users" :key="item.name">
            <User :data="item" :getData="getData"/> 
        </li>
    </ul> -->

    <!-- HTML Binding -->

    <!-- <h2>{{ text }}</h2>
    <div v-html="tag + tag2"></div>    if want bind more than one tag   -->

    <!-- Class binding -->
    <!-- <h2 :class="adjustStyle()">Taha</h2>
    <button v-on:click="colorfull = !colorfull">Change</button> -->

    <!-- Props -->
    <!-- <Student :name="name"/>
    <Teacher name="Dhruv"/> -->

    <!-- Data sent from Child to parent -->
    <!-- <h1>User name:{{ name }}</h1>
    <newUser :getUserName="getUserName"/> -->

    <!-- Ref -->
    <!-- <input type="text" ref="input">
    <br><br>
    <button v-on:click="getData">Click me</button> -->

    <!-- Simple form -->
    <!-- <h3>Simple form</h3>
    <p>{{ form }}</p>
    <form @submit.prevent="submitForm">
        <label>Input Field: <input type="text" v-model="inputField" /></label><br />
        <label>Radio Button:
            <input type="radio" value="Option 1" v-model="radioButton" /> Option 1
            <input type="radio" value="Option 2" v-model="radioButton" /> Option 2
        </label><br />
        <label>Checkbox1: <input type="checkbox" v-model="checkbox" /></label><br />
        <label>Dropdown:
            <select v-model="dropdown">
                <option disabled value="">Please select one</option>
                <option>Option 1</option>
                <option>Option 2</option>
            </select>
        </label><br />
        <button type="submit">Submit</button>
    </form> -->

    <!-- Non props data -->
    <!-- <newChild item="someData" name="user-cmp"/> -->

    <!-- Computed property -->
    <!-- <h3>Computed property {{ dollars }}</h3>
    <h3>{{ getResult}}</h3> -->

    <!-- Watchers -->
    <!-- <h3>{{ count }}</h3>
    <button v-on:click="count=count+1"> +</button>
    <button v-on:click="count=count-1"> -</button> -->

    <!-- Slots -->
    <!-- <Slots><h2>Hello my name is taha</h2></Slots>
    <Slots><h3>Rick and Morty  </h3></Slots>
    <Slots><img src="data:image/jpeg;base64,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"></Slots> -->

    <!-- Multiple Slots -->
    <!-- <Slots>
        <template v-slot:header><h1>Taha</h1></template>
        <template v-slot:main><h1>vue js is awesome to learn</h1></template>
        <template v-slot:footer><button>Click me</button></template>
    </Slots> -->

    <!-- Dynamic components -->
    <!-- <button  @click="tab='Java'">Load Java</button>
    <button @click="tab='Php'">Load Php</button>
    <button @click="tab='Node'">Load Node</button>
    
    <component :is="tab"></component> -->

    <!-- Teleport component !!not working -->
    <!-- <teleport to="#footer">
        <Footer></Footer>
    </teleport> -->
    
    <!-- beforeUdated,updated -->
    <!-- <h1 ref="count">counter {{ counter }}</h1>
    <button v-on:click="counter=counter+1">Update</button> -->

    <!-- beforeUnmount,unmounted -->
    <!-- <button v-on:click="show=false">Hide</button>
    <Unmount v-if="show"/> -->

    <!--  Routing -->
    <h2>First page</h2>

</template>
<script>
// import Child from './Child.vue'

// import User from './User.vue'

// import Student from './Student.vue'
// import Teacher from './Teacher.vue'

// import newUser from './newUser.vue';

// import newChild from './newChild.vue';

// import Slots from './Slot.vue';

// import Java from './Java.vue';
// import Php from './Php.vue';
// import Node from './Node.vue';

// import Footer from './Footer.vue';

// import Unmount from './Unmount.vue';

import Profile from './Profile.vue';
import Login from './Login.vue';
export default {
    name: "Home",
    // data()
    // {
    //     return{
    //         email:"taha@gmail.com",
    //         mobile:"9487643",
    //         getName()
    //         {
    //             return "Taha Bharmal"
    //         },
    //         getAge(x)
    //         {
    //             return x
    //         }
    //     }
    // },
    // methods:{
    //     getSport()
    //     {
    //         return "Football";
    //     },
    //     getHeight(x)
    //     {
    //         return x;
    //     },
    //     getData()
    //     {
    //         return{
    //             name:"ajay",
    //             email:this.email
    //         }
    //     }
    // }
    //Functions , Methods , Arguments 
    // data(){
    //     return {
    //         count:0
    //     }
    // }, 
    // methods:{
    //     getdata()
    //     {
    //         this.count=this.count+1;
    //     },
    //     getdata2(data)
    //     {
    //         alert(data)
    //     },
    //     getConsole()
    //     {
    //         console.log("event fired ")
    //     }
    // }
    //Two-way binding 
    // data(){
    //     return{
    //         data:100
    //     }
    // }
    //Get values from input fields and displaying it 
    // data()
    // {
    //     return{
    //         email : null,
    //         password : null
    //     }
    // },
    // methods:{
    //     getData()
    //     {
    //         console.warn("values :",this.email,this.password)
    //     }
    // }
    //Get values from checkbox and radio 
    // data(){
    //     return{
    //         technology:[],
    //         profession:null
    //     }
    // }
    //If-else condition
    // data(){
    //     return{
    //         show:true
    //     }
    // }
    //For loop
    // data(){
    //     return{
    //         technology:[
    //             "java",
    //             "php",
    //             "node",
    //             "html",
    //             "asp"
    //         ],
    //         users:[{
    //             name:'taha',
    //             email:'taha@gmai.com'
    //         },
    //         {
    //             name:'vaishal',
    //             email:'vaish@gmai.com'
    //         },
    //         {
    //             name:'jay',
    //             email:'jay@gmai.com'
    //         }
    //     ]
    //     }
    // }
    //Pass data to child component
    // components:{
    //     Child
    // },
    // data(){
    //     return {
    //         name:'taha',
    //         user :{
    //             name:"ajay",
    //             email:"ajay@gmail.com"
    //         }
    //     }
    // },
    // methods:{
    //     getData()
    //     {
    //         alert("Function alert")
    //     }
    // }
    //Reuse component
    //     components:{
    //         User
    //     },
    //     methods:{
    //     getData(name)
    //     {
    //         alert(name)
    //     }
    // },
    //     data()
    //     {
    //         return{
    //             users:[
    //                 {
    //                     name:'taha',
    //                     email:'taha@gmail.com'
    //                 },
    //                 {
    //                     name:'jay',
    //                     email:'jay@gmail.com'
    //                 },
    //                 {
    //                     name:'tushar',
    //                     email:'tushar@gmail.com'
    //                 },
    //                 {
    //                     name:'kamlesh',
    //                     email:'kamlesh@gmail.com'
    //                 },
    //             ]
    //         }
    //     }
    //HTML Binding
    // data(){
    //     return{
    //         text:"taha bharmal",
    //         tag:"<h2>Taha Bharmal</h2>",
    //         tag2:"<h2>Vaishal shrivali</h2>"
    //     }
    // }
    //Class binding
    // data() {
    //     return {
    //         colorfull: false
    //     }
    // },
    // computed: {
    //     adjustStyle() {
    //         return {
    //             green: this.colorfull,
    //             err: true
    //         }
    //     }
    // }
    //Props
    // data(){
    //     return{
    //         name:"Krutarth"
    //     }
    // },
    // components:{
    //     Student,
    //     Teacher
    // }
    //Child data send to parent using props
    // data(){
    //     return{
    //         name:''
    //     }
    // }, 
    // components:{
    //     newUser
    // },
    // methods:{
    //     getUserName(name){
    //         alert
    //         {
    //             this.name=name
    //         }
    //     }
    // }
    //Ref
    // methods:{
    //     getData()
    //     {
    //         this.$refs.input.focus();
    //         this.$refs.input.value="Enter some text";
    //         this.$refs.input.style.color="red";
    //         console.warn(this.$refs.input.value)
    //     }
    // }
    //Simple form
    // data() {
    //     return {
    //         inputField: '',
    //         radioButton: '',
    //         checkbox: false,
    //         dropdown: ''
    //     }
    // },
    // methods: {
    //     submitForm() {
    //         if (this.validateForm()) {
    //             console.log('Input Field:', this.inputField);
    //             console.log('Radio Button:', this.radioButton);
    //             console.log('Checkbox:', this.checkbox);
    //             console.log('Dropdown:', this.dropdown);
    //         } else {
    //             console.log('Form is not validated')
    //         }
    //     },
    //     validateForm() {
    //         if (this.inputField === '') return false;
    //         if (this.radioButton === '') return false;
    //         if (this.dropdown === '') return false;
    //         return true;
    //     }
    // }
    //Non-props data
    // components:{
    //     newChild
    // }
    //Computed property
    // data()
    // {
    //     return {
    //         dollars:100,
    //         rupees:70,
    //         discount:10
    //     }
    // },
    // computed:{
    //     getResult()
    //     {
    //         return (this.dollars*this.rupees)-this.discount 
    //     }
    // }
    //Watchers
    // data(){
    //     return{
    //         count:0
    //     }
    // },
    // watch:{
    //     count(val,prev)
    //     {
    //         if(val>10 && val>prev)
    //         {
    //             alert("stop counting")
    //         }
    //     }
    // }
    //Slots
    //    components:{
    //     Slots
    //    }
    //Dynamic components
    // components:{
    //     Java,
    //     Node,
    //     Php
    // },data(){
    //     return{
    //         tab:'Java'
    //     }
    // }
    //Teleport components
    // components:{
    //     Footer
    // }
    //
    // data()
    // {
    //     return {counter :0};
    // },
    //beforeCreate,created
    // beforeCreate(){
    //     alert("beforeCreated")
    // },
    // created(){
    //     this.name="Virat"
    //     alert("created")
    // }
    //beforeMount,mounted
    // beforeMount()
    // {
    //     console.warn("beforeMounted ",this.$el)
    // },
    // mounted()
    // {
    //     console.warn("mounted",this.$el)
    // }
    //beforeUdate,updated
    // beforeUpdate()
    // {
    //     console.log("beforeUpdated",this.$refs['count'].textContent)
    // },
    // updated()
    // {
    //     console.log("updated",this.$refs['count'].textContent)
    // }

    //beforeUnmount,unmounted
    // data(){
    //     return{
    //         show:true
    //     }
    // },
    // component: {
    //     Unmount
    // },
    // components: { Unmount }

    //Routing
}
</script>

<style scoped>
.green {
    background-color: green;
    width: 200px;
    padding: 10px;
    color: #fff;
}

.err {
    color: red;
}

</style>