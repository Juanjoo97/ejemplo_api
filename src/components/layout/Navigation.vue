<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item"  style="text-decoration: none; " to="/">
        <h3 class="title is-3">MyApp</h3>
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isOpen }"
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

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isOpen }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item"  style="text-decoration: none;" to="/"> Home </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="user">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"> {{ user.displayName ||user.email}} </a>

              <div class="navbar-dropdown">
                <a class="navbar-item" @click.prevent="dashboard">
                  Dashboard
                </a>
                <a class="navbar-item" @click.prevent="logout">
                  Cerrar sesion</a
                >
              </div>
            </div>
          </template>
          <template v-else>
            <div class="buttons">
              <router-link class="button is-primary"  style="text-decoration: none; " to="/register">
                <strong>Registrar</strong>
              </router-link>
              <router-link class="button is-light"  style="text-decoration: none;" to="/login">
                Iniciar sesion</router-link
              >
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      isOpen: false,
      user: null,
    };
  },
  methods: {
    toogleMenu() {
      const status = !this.isOpen;
      this.isOpen = status;
    },
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push({ name: "Login" });
      });
    },
    dashboard() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
          this.$router.push({ name: "Dashboard" });
        } else {
          this.$router.push({ name: "Verification" });
        }
      });
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>