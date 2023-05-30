<template>
    <h2 v-bind="$attrs">this is the new child </h2>
    <h2>{{ item }}</h2>
</template>
<script>
export default {
    name: "newChild",
    props:{
        item:String
    },
    inheritAttrs:false
}
</script>