<template>
  <div class="container">
    <div class="colums">
      <div class="column is-6 is-offset-3">
        <br /><br /><br /><br /><br /><br />

        <center>
          <form class="box">
            <div class="field">
              <h1 class="titulo" align="center">MyApp</h1>
              <hr />
              <br />
              <h4>Supervision Iluminación, humedad y operacion del actuador</h4>
              <br />

              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="encender"
              >
                On Moto bomba
              </button>
              <br /><br />
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="apagar"
              >
                Off Moto bomba
              </button>
              <br /><br /><br />
              <button
                type="button"
                class="button is-primary"
                @click.prevent="mostrar"
              >
                Mostrar
              </button>

              <br /><br />
              <div id="myDiv">
                <div id="Ilu"></div>
                <div id="Hume"></div>
              </div>
            </div>
          </form>
        </center>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br />
  </div>
</template>
<script>
import { database } from "../main.js";
import { ref, set, getDatabase, onValue } from "firebase/database";
export default {
  data() {
    return {
      newItem: "",
    };
  },
  methods: {

    async encender() {
      set(ref(database, "home"), {
        moto: "True",
      });
      document.getElementById("Hume").style.background = "#FFD700";
    },
    async apagar() {
      set(ref(database, "home"), {
        moto: "False",
      });
      document.getElementById("Hume").style.background = "white";
    },
    async mostrar() {
      const database = getDatabase();
      const starCountRef = ref(database, "sensor");
      onValue(starCountRef, (snapshot) => {
        this.data = snapshot.val();
        console.log(this.data);
        document.getElementById("Ilu").innerHTML =
          "Sensor de luz: " + snapshot.val().Ilu;
        document.getElementById("Hume").innerHTML =
          "Humedad: " + snapshot.val().Hume + "%";
      });
    },
  },
};
</script> 

<style>
#myDiv {
  width: 400px;
  height: 50px;
  border: 1px solid black;
}
</style>
