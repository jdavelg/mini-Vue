<template>


   
  <article class="article-item" id="article-template" >
    <div class="image-wrap">
        <img :src="pelicula.image"
            alt="Paisaje" >
    </div>
    <h2>{{pelicula.title}}</h2>
    <span class="date" :class="{'yeargreen':pelicula.year>=2015 }">{{pelicula.year}}</span>
    <a href="#">Leer Mas</a>
    <div class="clearfix"></div>
</article>
  
</template>

<script>



export default {
name:'Pelicula',
props:['pelicula'],
components:{
      
  
    }

}
</script>

<style>

</style>