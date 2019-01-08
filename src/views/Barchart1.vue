<template>
<div>
    <nav class="navbar navbar-light">
        <span class="title">Bar Chart</span>
    </nav>
    <div class="container">
		<div class="row">	
            <div class="col-lg-8 col-md-12 col-sm-12">
                <Barsvg :chartData="columns" ref="barsvg"></Barsvg>
            </div>

            <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="inputBlock">
                    <div>
                        <button type="button" class="manipulation" @click="addCol">add</button>
                    </div>
                    <div class="inputs">
                        <form id="form">
                            <div v-for="(column,index) in columns" :key="index" class="form-row" >
                                <div class="col-7">
                                    <input type="text" class="form-control" name="rowAttr" 
                                    v-model="column.attribute" placeholder="Attribute">
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control" name="rowValue" v-model="column.value"
                                    placeholder="Value">
                                </div>
                                <div class="col-2">
                                    <i class="far fa-trash-alt trashbin" @click="deleteCol(index)"></i>
                                </div>
                            </div>
                        </form>
                        <div class="submitBlock">
                            <button type="submit" class="btn submit_button" @click="submitData">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
</div>
</template>

<script>
import Barsvg from '../components/Barchartsvg.vue'

export default {
    name:'barchart1',
    components:{Barsvg},
    data(){
        return{
            columns:[{attribute:'day1',value:200},
                    {attribute:'day2',value:250},
                    {attribute:'day3',value:600},
                    {attribute:'day4',value:450},
                    {attribute:'day5',value:98}],
            svg_columns:[]
        }
    },
    methods:{
        addCol(){
            this.columns.push({attribute:'default',value:0});
        },
        deleteCol(i){
            this.columns.splice(i,1);
        },
        submitData(){
            // this.svg_columns=this.columns;
            this.$refs.barsvg.update();
        }
        
    }
}
</script>
<style lang="scss" scoped>
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
    .manipulation {
        background:$white;
        color:$main_purple;
        border:1px solid $main_purple;
        border-radius: 0.3em;
        padding: 7px 15px;
        cursor:pointer;
    }

    .inputBlock {
        width: 100%;
        height: 500px;
        margin-top: 50px;
    }

    .trashbin {
        color:$subChoice_color;
        font-size: 20px;
        padding: 8px 5px;
        cursor:pointer;

    }
    .form-row {
        margin-top: 10px;
    }
    .inputs {
        width: 100%;
        height: 100%;
        margin-top: 30px;
    }

    .primary_button, .submit_button {
        background:$main_purple;
        color: white;
        font-weight: bold;
    }
    .submitBlock {
        width: 100%;
        height: 50px;
        margin-top: 30px;
    }
</style>
