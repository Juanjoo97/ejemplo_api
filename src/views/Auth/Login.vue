<template>
  <div class="container">
    <br /><br /><br />    <br /><br /><br />
    <div class="colums">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3" align="center">Iniciar sesion</h3>
        <hr />
        <form action="#" @submit.prevent="login">
          <div class="field">
            <label class="label">Correo Electronico:</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
                v-model="email"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Contraseña:</label>
            <div class="control">
              <input class="input" type="Password" v-model="password" />
            </div>
          </div>
          <div class="has-text-centered">
            <button type="submit" class="button is-primary">
              Iniciar sesion
            </button>
          </div>
        </form>
        <br />
        <div
          class="notification is-danger is-light"
          v-if="error"
          align="center"
        >
          {{ error }}
        </div>
      </div>
    </div>
    <br /><br /><br /><br />
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  name: "Register",

  methods: {
    login() {
      this.error = "";
      if ((this.email, this.password)) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if (user.emailVerified) {
              // Signed in
              this.email = "";
              this.password = "";

              this.$router.push({ name: "Dashboard" });
              // ...
            } else {
              this.$router.push({ name: "Verification" });
            }
          })
          .catch((error) => {
            this.error = error.message;
            this.errorCode = error.code;
            this.errorMessage = error.message;
            // ..
          });
      } else {
        this.error = "Todos los campos son requeridos";
      }
    },
  },
};
</script>