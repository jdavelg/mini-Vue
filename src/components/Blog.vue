<template>
<div class="general">
 <Slider  texto="Bienvenido al blog" />
   <div class="center">
    <div>
        <section id="content">
<h2 class="subheader">Blog</h2>
<div id="articles" v-if="articles">
  <!-- listado Articulos -->
  
<Articles :articles="articles"></Articles>


<!-- Añadir Articulos via JS-->
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
        name:'Blog',
        components:{
      Slider,
    Sidebar,
    Articles,
    },
    mounted(){
      this.getArticles()
    },
    data(){
      return{
        url:Global.url,
articles:null
}
    },

    methods:{
      getArticles(){
        axios.get(this.url+"articles")
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