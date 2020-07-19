<template>
       <div class="general">
 <Slider texto="Bienvenido a mi pagina web"/>
   <div class="center">
          <section id="content">

            <h2 class="subheader">Peliculas</h2>

<div id="articles">
  <!-- listado Articulos -->
<!--   v-for="pelicula in peliculas" :key="pelicula.title" -->
<div v-for="pelicula in peliculas" :key="pelicula.title">
<Pelicula :pelicula="pelicula" ></Pelicula>
</div>
<!-- Añadir Articulos via JS-->
</div>     
        </section>
            <Sidebar/>


<div class="clearfix"></div>
</div>
</div>
</template>



<script>
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
import Pelicula from './Pelicula.vue'
export default {
name:'Peliculas',
data(){
    return{
        peliculas:[
            {title:'batman', year:2012, image:"https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg"},
             {title:'superman', year:2015, image:"https://upload.wikimedia.org/wikipedia/en/6/6f/War_official_poster.jpg"},
               {title:'tiburon', year:1998, image:"https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic1.abc.es%2Fmedia%2Fpeliculas%2F000%2F003%2F413%2Ftiburon-1.jpg&nuevoancho=690&medio=abc"}
        ]
    }
},
components:{
Pelicula,
 Slider,
    Sidebar,
},
filters:{
mayusculas(value){
  return value.toUpperCase()
}
},
computed:{
  peliculasMayuscula(){
    var peliculasMod=this.peliculas
    for (let index = 0; index < peliculasMod.length; index++) {
 peliculasMod[index].title= peliculasMod[index].title.toUpperCase()       
    }
   return peliculasMod
  }
}


}

</script>

<style>

</style>