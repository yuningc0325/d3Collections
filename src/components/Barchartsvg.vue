<template>
        <div id="canvas" >
        </div>
       
</template>
<script>
export default {
    name:'barsvg',
    data(){
        return{
            margin :{left:100,right:100,top:50,bottom:70},
            width:'',
            height:'',
            svg:'',
            group:'',
            x:'',
            xLabel:'',
            xaxis_group:'',
            xaxis:'',
            y:'',
            yLabel:'',
            yaxis_group:'',
            yaxis:'',
            attributes:[],
            
        }
    },
    props:{
        chartData: Array 
    },
    created(){
        
    },
    mounted(){
        this.width=parseInt(this.$d3.select("#canvas").style("width"),10)-this.margin.left-this.margin.right;
        this.height=parseInt(this.$d3.select("#canvas").style("height"),10)-this.margin.top-this.margin.bottom;
        //draw svg
        this.svg= this.$d3.select('#canvas')
                            .append('svg')
                            .attr('height',this.height+this.margin.top+this.margin.bottom)
                            .attr('width',this.width+this.margin.left+this.margin.right)
        //define group
        this.group= this.svg.append('g')
                            .attr('transform','translate('+this.margin.left+','+this.margin.top+')')
        // x scale
        this.x=this.$d3.scaleBand()
                        .range([0,this.width])
                        .paddingInner(0.3)
                        .paddingOuter(0.3)
        this.xaxis_group=this.group.append('g').attr('transform','translate(0,'+this.height+')');
        this.xLabel = this.group.append("text")
                                .text("Attributes")
                                .attr("text-anchor","middle")
                                .attr("x",this.width/2)
                                .attr("y",this.height+50)
                                .attr("fill","#333333")

        
        // y scale
        this.y=this.$d3.scaleLinear()
                        .range([this.height,0]);
        this.yaxis_group = this.group.append('g');
        this.yLabel = this.group.append("text")
                                .text("Value")
                                .attr("text-anchor","middle")
                                .attr("transform","rotate(-90)")
                                .attr("x",-180)
                                .attr("y",-this.margin.left/2)
                                .attr("fill","#333333")
        this.update();
        
    },
    methods:{
        printTest(){
            console.log(this.chartData);
        },
        axisCall(){
            this.xaxis = this.$d3.axisBottom(this.x)
            this.xaxis_group.call(this.xaxis);
            this.yaxis=this.$d3.axisLeft(this.y);
            this.yaxis_group.call(this.yaxis);
        },
        update(){
            var data= this.chartData;
            this.x.domain(data.map(el=>{
                return el.attribute;
            }));
            this.y.domain([0,this.$d3.max(data,el=>{
                return el.value;
            })])
            this.axisCall();
            //join data
            var rects=this.group.selectAll("rect").data(data);
            // remove all data
            rects.exit().remove();
            // update data
            rects.attr("x",el=>{
                return this.x(el.attribute)
            })
            .attr("y",el=>{
                return this.y(el.value)
            })
            .attr("width",this.x.bandwidth)
            .attr("height",el=>{
                return this.height-this.y(el.value)
            })
            .attr('fill','#f29057')
            // enter data
            rects.enter().append("rect")
            .attr("x",el=>{
                return this.x(el.attribute)
            })
            .attr("y",el=>{
                return this.y(el.value)
            })
            .attr("width",this.x.bandwidth)
            .attr("height",el=>{
                return this.height-this.y(el.value)
            })
            .attr('fill','#f29057')
        }
    }
}
</script>
<style lang="scss" scoped>
#canvas{
    border:1px solid black;
    border:1px solid rgb(230,232,235);
    border-radius: 10px;
    box-shadow:1px 1px 3px rgba(20%,20%,40%,0.5);
    margin-top: 50px;
    width:100%;
    height:500px;
}

</style>
