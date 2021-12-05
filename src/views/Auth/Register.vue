<template>
  <div class="container">
    <div class="colums">
      <div class="column is-6 is-offset-3">
          <h3 class="title is-3" align="center">Crear cuenta</h3><hr>
        <form action="#" @submit.prevent="register">

          <div class="field">
            <label class="label">Nombre:</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith" v-model="nombre" />
            </div>
          </div>

          <div class="field">
            <label class="label">Correo Electronico:</label>
            <div class="control">
              <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email"
              />
            </div>
          </div>
           <div class="field">
            <label class="label">Contraseña:</label>
            <div class="control">
              <input class="input" type="Password" v-model="password"/>
            </div>
          </div>
            <div class="has-text-centered">

          <button type="submit" class= "button is-primary" >Registrarme</button>
        </div>
        </form>
        <br>
        <div class="notification is-danger is-light" v-if="error"  align="center">
            
            {{error}}

            </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    data(){
        return {
            nombre:'',
            email:'',
            password: '',
            error:''
        }
    },
  name: "Register",

  methods:{
      register(){
          this.error=''
        if (this.nombre, this.email, this.password){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user =>{
             this.nombre=''
              this.email=''
              this.contraseña=''
                console.log(user)
           }).catch(err=>{
             this.error= err.message
           })
          console.log(this.nombre)
        }else {
            this.error= 'Todos los campos son requeridos'
         }
      }
  }
};
</script>