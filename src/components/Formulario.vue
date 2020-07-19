<template>
  <div class="general">
    <Slider texto="Formulario de contacto" />
    <div class="center">
      <div>
        <section id="content">
          <h2 class="subheader" >Formulario</h2>
          <form action="#" class="mid-form" @submit.prevent="mostrarUsuario()">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" name="nombre" v-model="user.nombre"/>
              <div v-if="submitted && !$v.user.nombre.required">
                Este campo es requerido
              </div>
               <div v-if="submitted && !$v.user.nombre.minLength">
                Tienes que agregar mas caracteres
              </div>
            </div>

            <div class="form-group">
              <label for="apellidos">Apellidos</label>
              <input type="text" name="apellidos" v-model="user.apellidos"/>
              <div v-if="! submitted && $v.user.apellidos.required">
                Este campo es requerido
              </div>
            </div>

            <div class="form-group">
              <label for="bio">Biografia</label>
              <textarea name="bio" v-model="user.bio"></textarea>
              <div v-if="submitted && !$v.user.bio.required">
                Este campo es requerido
              </div>
            </div>

            <div class="radiobuttons">
              <input type="radio" name="genero" value="hombre" v-model="user.genero"/>Hombre
              <input type="radio" name="genero" value="mujer" v-model="user.genero"/>Mujer
              <input type="radio" name="genero" value="otro" v-model="user.genero"/>Otro
            </div>
            <div class="clearfix"></div>

            <input type="submit" value="Enviar" class="btn btn-success" />
          </form>
          <div>
            <h3 v-if="user.nombre && user.apellidos">{{user.nombre+' '+user.apellidos}}</h3>
          </div>
        </section>
      </div>
      <Sidebar />

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import {required,  minLength } from 'vuelidate/lib/validators'
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "Formulario",
  
  components: {
    Slider,
    Sidebar
  },
  validations:{
    user:{
nombre:{
  required,
  minLength: minLength(3),
},
apellidos:{
  required,
   minLength: minLength(3),
},
bio:{
  required,
   minLength: minLength(10),
}
}
  }
  
  ,
  data(){
    return{
      submitted:false,
      user:{
        nombre:'',
        apellidos:'',
        bio:'',
        genero:''
      }
    }
  },
  methods:{
    mostrarUsuario(){
      console.log(this.user);
      this.submitted=true,
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false
        
      }else{
        console.log('validacion pasada');
        
      }
      
    }
  }
};
</script>

<style >
</style>