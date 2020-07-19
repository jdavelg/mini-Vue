<template>
<div class="general">
 <Slider texto="Bienvenido a mi pagina web" showButton="true" />
   <div class="center">
          <section id="content">

            <h2 class="subheader">Ultimos Articulos</h2>

<div id="articles" >
  <!-- listado Articulos -->
 <Articles :articles="articles"></Articles>
<!-- Añadir Articulos via JS-->
</div>     
        </section>
        <Sidebar/>


<div class="clearfix"></div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import Articles from'./Articles.vue'
import Global from '../Global'
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
export default {
    name:'LastArticles',
    components:{
      Slider,
    Sidebar,
    Articles,
    },
    mounted(){
this.getLastArticles()
    },
    methods:{
       getLastArticles(){
        axios.get(this.url+"articles/true")
        .then(res=>{
          
          if (res.data.status=="success") {
            this.articles=res.data.articles
          }
          console.log(this.articles);
          
        })
      }
    },
    data(){
      return {
        url: Global.url,
        articles:null
      }
    }
}
</script>

