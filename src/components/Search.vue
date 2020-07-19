<template>
<div class="general">
 <Slider  :texto="'Busqueda : '+searchString" />
   <div class="center">
    <div>
        <section id="content">
<h2 class="subheader" v-if="articles">Articulos encontrados</h2>
<div id="articles" v-if="articles">
  <!-- listado Articulos -->
  
<Articles :articles="articles"></Articles>


<!-- Añadir Articulos via JS-->
</div>
<div v-if="!articles">
    <h2 class="subheader">No se encontraron articulos relacionados a tu busqueda</h2>
</div>
</section>
    </div>
            <Sidebar/>


<div class="clearfix"></div>
</div>
</div>
</template>

<script>

import axios from 'axios'
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
import Global from '../Global'
import Articles from './Articles.vue'
    export default {
        name:'Search',
        components:{
      Slider,
    Sidebar,
    Articles,
    },
    mounted(){
        this.searchString= this.$route.params.searchString
      this.getArticlesBySearch(this.searchString)
    },
    data(){
      return{
        url:Global.url,
        searchString:null,
articles:null
}
    },

    methods:{
      getArticlesBySearch(searchString){
        axios.get(this.url+"search/"+searchString)
        .then(res=>{
          
          if (res.data.status=="success") {
            this.articles=res.data.articles
          }
          console.log(this.articles);
          
        })
      }
    }
    }
</script>

<style >

</style>