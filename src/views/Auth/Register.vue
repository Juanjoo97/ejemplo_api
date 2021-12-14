<template>
  <div class="container">
    <br /><br />    <br /><br /><br /><br/>
    <div class="colums">
      <div class="column is-6 is-offset-3">
        <h3 class="title is-3" align="center">Crear cuenta</h3>
        <hr />
        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Nombre:</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="e.g Alex Smith"
                v-model="name"
              />
            </div>
          </div>

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
            <button type="submit" class="button is-primary">Registrarme</button>
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
    <br /><br />
  </div>
</template>
<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  name: "Register",

  methods: {
    register() {
      this.error = "";
      if ((this.name, this.email, this.password)) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(this.name);
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              // ...
            });

            if (user.emailVerified) {
              if (user) {
                // The user object has basic properties such as display name, email, etc.
                updateProfile(auth.currentUser, {}).then(() => {
                  this.name = "";
                  this.email = "";
                  this.password = "";
                  console.log(user);
                  this.$router.push({ name: "Dashboard" });
                });
              }
            } else {
              this.$router.push({ name: "Verification" });
            }
          })
          .catch((err) => {
            this.error = err.message;
          })
          // Signed in

          .catch((error) => {
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