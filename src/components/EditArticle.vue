<template src="./CreateArticle.html">

</template>

<script>

import axios from 'axios'
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
import Global from '../Global'
import {required} from 'vuelidate/lib/validators'
import Article from './models/Article'
import swal from 'sweetalert'

    export default {
        name:'EditArticle',
        components:{
      Slider,
    Sidebar,
   
    },
    mounted(){
        var articleId= this.$route.params.id
     this.getArticle(articleId)
      this.submitted
    },
    data(){
      return{
        url:Global.url,
article:new Article('','',null,''),
submitted:false,
isEdit:true
}
    },
    validations:{
      article:{
title:{
  required
},
content:{
  required
}

      }

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

      fileChange(){
this.file=this.$refs.file.files[0]


      },
      saveArticle(){
          var articleId= this.$route.params.id
        this.submitted=true;
        this.$v.$touch()
        if (this.$v.$invalid) {
          return false
        }else{            

        
 axios.put(this.url+"article/"+articleId, this.article)
        .then(res=>{
          
          if (res.data.status=="success") {
           var article_id=res.data.article._id
           //subida de archivos


           if(this.file!= null && this.file!=undefined && this.file !=''){
 const formData= new FormData();

          formData.append(  'file0', this.file,  this.file.name  )

axios.post(this.url+'upload-image/'+ article_id, formData)
.then(resp=>{
  if(resp.data.article){
    swal(
      'Edicion de articulo ',
      'El articulo se ha editado correctamente :)',
      'success'
    )
this.article=resp.data.article
            this.$router.push('/articulo/'+this.article._id)
  }else{
           swal(
      'articulo ',
      'Problemas al actualizar el articulo',
      'error'
    )
    //mostrar alerta de error
  }
}).catch(error=>{
  console.log(error);
  
})
           }else{
               swal(
      'articulo ',
      'El articulo se ha actualizado correctamente :)',
      'success'
    )
              this.$router.push('/blog')
            
           }           


          }
      
          
        }).catch(error=>{
          console.log(error);
           swal(
      'articulo No creado',
      'El articulo no se pudo guardar',
      'error'
    )
        })
        }
       
      }
    }
    }
</script>

<style >

</style>