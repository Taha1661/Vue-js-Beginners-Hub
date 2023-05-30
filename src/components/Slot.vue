<template>
    <div class="cart">
        <header>
            <slot name="header">Default data</slot>
        </header>
        <content>
            <slot name="main">Default data</slot>
        </content>
        <footer>
            <slot name="footer">Default data</slot>
        </footer>
    </div>
</template>
<script>
export default {
    name: "Slots",
    props: {
        name: String
    }
}
</script>
<style>
.cart{
    border:1px solid;
    width:131px;
    padding: 20px;
    margin: 20px;
    text-align: center;
}
</style>