<template>
<div class="col-md-9">
    <div id="canvas"></div>  
</div>
</template>
<script>
export default {
    name:'scatter',
    data(){
        return{
            time:0,
            colorContinent:{africa:"#a3cee3", americas:"#fd9d99",asia:"#b2dc8c", europe:"#ffbe71"},
            margin:{top:70,bottom:90,left:80,right:80},
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
            yearText:'',
            area:'',
            countriesData:[],
            yearData:[]

        }
    },
    mounted(){
        this.width=parseInt(this.$d3.select("#canvas").style("width"),10)-this.margin.left-this.margin.right;
        this.height=parseInt(this.$d3.select("#canvas").style("height"),10)-this.margin.top-this.margin.bottom;
        this.svg = this.$d3.select("#canvas")
                    .append("svg")
                    .attr("width",this.width+this.margin.left+this.margin.left)
                    .attr("height",this.height+this.margin.top+this.margin.bottom)

        this.group = this.svg.append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");
        // define x
        this.x = this.$d3.scaleLog().base(10)
                        .range([0,this.width])
                        .domain([300,150000])
        this.xaxis_group = this.group.append("g")
                            .attr("transform","translate(0"+","+this.height+")")
        this.xaxis = this.$d3.axisBottom(this.x)
                    .tickValues([100,1000,10000,100000,150000])
                    .tickFormat(d=>{return d});
        this.xaxis_group.call(this.xaxis);
        this.xLabel = this.group.append("text")
                        .text("GDP ($)")
                        .attr("text-anchor","middle")
                        .attr("x",this.width/2)
                        .attr("y",this.height+50)
                        .attr("class","xLabel")
                        .attr("fill","gray")
        // define y
        this.y = this.$d3.scaleLinear()
                    .range([0,this.height])
                    .domain([90,0]);

        this.yaxis_group = this.group.append("g");
        this.yaxis = this.$d3.axisLeft(this.y);
        this.yaxis_group.call(this.yaxis);

        this.yLabel = this.group.append("text")
                        .text("Life Expectancy (Years)")
                        .attr("transform","rotate(-90)")
                        .attr("text-anchor","middle")
                        .attr("x",-150)
                        .attr("y",-40)
                        .attr("class","yLabel")
                        .attr("fill","gray")
        this.yearText = this.group.append("text")
                        .text("1800")
                        .attr("transform","translate("+(this.width-100)+","+(this.height-20)+")")
                        .attr("class","yearText")
                        .attr("opacity", "0.4")

        // define radius 
        this.area = this.$d3.scaleLinear()
                        .range([25*Math.PI, 1500*Math.PI])
                        .domain([2000, 1400000000]);
      
        this.draw();
    },
    methods:{
        update(data,index){
        var circles = this.group.selectAll("circle").data(data,function(d){
            return d.country;
        });
        //remove
        circles.exit().remove();
        //update
        circles.attr("cx",(el)=>{
                    return this.x(el.income)
                })	
                .attr("cy",el=>{
                    return this.y(el.life_exp)
                })
                .attr("r",el=>{
                    return Math.sqrt(this.area(el.population)/Math.PI)
                })
                .attr("fill",el=>{
                    return this.colorContinent[el.continent];
                });
        // enter
        circles.enter()
                .append("circle")
                .attr("cx",(el)=>{
                    return this.x(el.income)
                })	
                .attr("cy",el=>{
                    return this.y(el.life_exp)
                })
                .attr("r",el=>{
                    return Math.sqrt(this.area(el.population)/Math.PI)
                })
                .attr("fill",el=>{
                    return this.colorContinent[el.continent];
                })
        this.yearText.text(index);
        },
        draw(){
            var update = this.update;
            var d3 = this.$d3;
            var time = this.time;
            this.$d3.json('/gapminderData.json',function(data){
            var countriesData = data.map(result=>{
                return result["countries"].filter(el=>{
                    return (el.income!=null && el.life_exp!=null);
                })
            })
            var yearData = data.map(result=>{
                return result["year"];
            })
            update(countriesData[0],yearData[0]);
            d3.interval(function(){
                time = (time>=214)? 0:time+1;
                update(countriesData[time],yearData[time]);
            },100)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
#canvas {
	margin-left: auto;
    margin-right: auto;
    width:100%;
    height:500px;
    border:1px solid rgb(230,232,235);
    border-radius: 10px;
    box-shadow:1px 1px 3px rgba(20%,20%,40%,0.5);
}
.yearText{
	font-size: 30px;
	letter-spacing: 0.5em;
	font-weight: bold;
}
.xLabel,.yLabel{
	font-weight: bold;
	font-size:18px;
	color: gray;
}
</style>
