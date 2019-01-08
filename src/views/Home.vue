<template>
    <div class="container">
      <!-- nav -->
      <div class="navBar">
        <div class="title-text" style="text-align:center;">
          Data Visualization Collections
        </div>
      </div>
      <!-- body -->
      <div class="collections">
        <div class="row">
          <div class="col-md-4">
              <div class="card">
                <img class="card-img-top"  src="../assets/barchart.png">
                <div class="card-body">
                  <h5 class="card-title">Bar chart</h5>
                  <p class="card-text">Give attributes and data,the browser will automatically produce a bar chat.</p>
                  <a href="/barchart1" class="btn btn-primary">See</a>
                </div>
              </div>
          </div>
          <div class="col-md-4">
            <div class="card">
                <img class="card-img-top"  src="../assets/Gapminder.png">
                <div class="card-body">
                  <h5 class="card-title">Gap Minder</h5>
                  <p class="card-text">The graph shows world's GDP and life expectancy condition which can be divided into
                    four continents with four colors. Each circle represents each country. The bigger area means the population of corresponding country is higher.
                  </p>
                  <a href="/gapminder" class="btn btn-primary">See</a>
                </div>
              </div>
          </div>
          <div class="col-md-4">
            <div class="card" >
                <img class="card-img-top"  src="../assets/barchart.png">
                <div class="card-body">
                  <h5 class="card-title">Bar chart</h5>
                  <p class="card-text">Give attributes and data,the browser will automatically produce a bar chat.</p>
                  <a href="#" class="btn btn-primary">See</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
@mixin division($color,$width,$height){
  background:$color;
  width:$width;
  height:$height;
}
.navBar{
  @include division($back_gray,max,auto);
  
}
.collections{
  @include division($white,max,auto);
  padding:50px;
}

.title-text{
  font-size:30px;
  padding:20px;
  font-weight: bold;
}
.card{
  margin-top:10px;
}
</style>


