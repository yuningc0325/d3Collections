<template>
<div class="col-md-3">
       <div ><h3>Color Reference</h3></div>
        <div class="continent-block">
            <div class="continent" style="background-color:#a3cee3"></div>
            <div class="continent-text">Africa</div>
        </div>
        <div class="continent-block">
            <div class="continent" style="background-color:#fd9d99"></div>
            <div class="continent-text">America</div>
        </div>
        <div class="continent-block">
            <div class="continent" style="background-color:#b2dc8c"></div>
            <div class="continent-text">Asia</div>
        </div>
        <div class="continent-block">
            <div class="continent" style="background-color:#ffbe71"></div>
            <div class="continent-text">Europe</div>
        </div>         
</div>
    
</template>
<script>
export default {
    name:'colorRef',
}
</script>
<style lang="scss" scoped>
.continent{
	display: inline-block;
	width: 35px;
    height: 35px;
}

.continent-text{
	display: inline-block;
    font-size: 1.2em;
    padding-left: 20px;
    color: #737373;
}

.continent-block{
	margin-top:30px;
}
</style>
