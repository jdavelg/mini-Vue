<template>
    <div class="general">
 <Slider  texto="Bienvenido al blog" />
   <div class="center">
    <div>
        <section id="content">
<h2 class="subheader">Articulo</h2>
<article class="article-item article-detail" v-if="article">
    <div class="image-wrap">
        <img src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Paisaje" v-if="!article.image">
         <img :src="url+'get-image/'+article.image"  v-if="article.image" :alt="article.title">
    </div>
    <h1 class="subheader"> {{article.title}}</h1>
    <span class="date">{{article.date |moment('from', 'now')}}</span>
    <p>
        {{article.content}} 
    </p>
  
    <div class="clearfix"></div>
    <router-link :to="'/editar/'+article._id" class="btn" style="background:yellow; color:black; text-align:center; border: 1px solid #444">Editar </router-link>
    <a @click="deleteArticle(article._id)"  class="btn" style="background:red; color:white ;text-align:center; border: 1px solid #444">Eliminar </a>
</article>          
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
import swal from 'sweetalert'
    export default {
        name:'Article',
        components:{
      Slider,
    Sidebar,
   
    },
    data(){
return{
url:Global.url,
article:null
}
    },
    mounted(){
        var articleId= this.$route.params.id
this.getArticle(articleId)
    },
    methods:{
       getArticle(articleId){
           axios.get(this.url+'article/'+articleId)
           .then(res=>{

               if (res.data.status=="success") {
                   this.article=res.data.article
               }
           })
       } ,
       deleteArticle(articleId){

swal({
  title: "estas seguro?",
  text: "Una vez eliminado el articulo ya no se podra recuperar",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
      axios.delete(this.url+'article/'+articleId)
.then(res=>{

    if (res.data.status!="error") {
    
        this.$router.push('/blog')
    }else{
             swal(
'articulo',
'error al eliminar articulo',
'error'
             )
    }
})
    swal("Articulo eliminado con exito!", {
      icon: "success",
    });
  } else {
    swal("No se elimino el Articulo!");
  }
});





       }
    }
    }
</script>

<style lang="less" scoped>

</style>