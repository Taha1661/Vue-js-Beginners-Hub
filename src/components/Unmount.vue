<template>
    <h1 ref="unmount">Unmount component</h1>
</template>
<script>
export default{
    name:'Unmount',
    beforeUnmount()
    {
        console.warn("beforeUnmount",this.$refs['unmount'])
    },
    unmounted()
    {
       console.warn("unomunted",this.$refs['unmount']) 
    }
}
</script>