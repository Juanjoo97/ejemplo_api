<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <h3 class="title is-3">MyApp</h3>
      </router-link>

      <a
        role="button"
        class="navbar-burger" :class="{'is-active': isOpen}"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click.prevent="toogleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"> Home </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-primary" to="/register">
              <strong>Registrar</strong>
            </router-link>
            <router-link class="button is-light" to="/login"> Iniciar sesion</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    data(){
        return {
            isOpen: false
        }
    },
    methods:{
        toogleMenu(){  
            const status= !this.isOpen
            this.isOpen=status
        }
    }
};
</script>