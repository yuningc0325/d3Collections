<template>
    <div>
        <nav class="navbar navbar-light">
            <span class="title">Gap Minder</span>
        </nav>
        <div>
            <div class="container">
                <div class="row">
                    <Scatter></scatter>
                    <ColorReference></ColorReference>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Scatter from '../components/gapminder/scatter.vue'
import ColorReference from '../components/gapminder/colorRef.vue'
export default {
    name:'gapminder',
    components:{Scatter,ColorReference}
}
</script>
<style lang="scss" scoped>
.row{
    margin: 30px auto;
}
.title{
        color:$white;
        padding-top: .3125rem;
        padding-bottom: .3125rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        font-weight: bold;
        margin: 0px auto;
    }
.navbar{
    background:$dark_purple;
}

</style>
