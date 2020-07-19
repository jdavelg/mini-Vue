<template>
      <div class="general">
 <Slider/>
   <div class="center">
    <div>
        <section id="content">
<h2 class="subheader">Pagina</h2>
<h3> El parametro es : {{id_url}}</h3>
<button @click="actualizarNombre()">Actualizar Nombre</button>
<button @click="redirigiralBlog()">Redirige al blog</button>
<h2>{{nombre}}</h2>
</section>
    </div>
           <Sidebar/>


<div class="clearfix"></div>
</div>
</div>
</template>

<script> 
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'


    export default {
        name:'Pagina',
        created(){
          console.log('componente creado');
            
        },
        components:{
      Slider,
    Sidebar,
    },
        mounted(){
this.id_url= this.$route.params.id
console.log('componente montado');

        },
        updated(){
console.log('componente actualizado');

        },
        destroyed(){
console.log('componente destruido');

        },
        methods:{
        actualizarNombre(){
this.nombre="nombre cambiado"
        },
        redirigiralBlog(){
this.$router.push('/blog')
        }
        },
        data(){
            return{
id_url:null,
nombre:'camilo sesto'
            }
            
        }
    }
</script>

<style >

</style>