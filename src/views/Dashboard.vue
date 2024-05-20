<template>
  <div class="container">
    <div class="columns">
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

              <button type="button" class="btn btn-primary" @click.prevent="encender">
                On Moto bomba
              </button>
              <br /><br />
              <button type="button" class="btn btn-primary" @click.prevent="apagar">
                Off Moto bomba
              </button>
              <br /><br /><br />
              <button type="button" class="button is-primary" @click.prevent="mostrar">
                Mostrar
              </button>

              <br /><br />
              <div id="myDiv">
                <div id="Ilu"></div>
                <div id="Hume" :style="{ background: humeBackground }"></div>
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
      motoState: 0, // Estado de la moto (0: apagada, 1: encendida)
      humeBackground: "white", // Color de fondo inicial de Hume
    };
  },
  methods: {
    async encender() {
      try {
        await set(ref(database, "home"), {
          moto: 1,
        });
        this.motoState = 1;
        this.actualizarColorHume();
      } catch (error) {
        console.error("Error al encender la moto:", error);
      }
    },
    async apagar() {
      try {
        await set(ref(database, "home"), {
          moto: 0,
        });
        this.motoState = 0;
        this.actualizarColorHume();
      } catch (error) {
        console.error("Error al apagar la moto:", error);
      }
    },
    async mostrar() {
      const database = getDatabase();
      const starCountRef = ref(database, "sensor");
      onValue(starCountRef, (snapshot) => {
        this.data = snapshot.val();
        document.getElementById("Ilu").innerHTML =
          "Sensor de luz: " + snapshot.val().Ilu;
        document.getElementById("Hume").innerHTML =
          "Humedad: " + snapshot.val().Hume + "%";
        
        // Actualizar el color de fondo de Hume según el estado de la moto
        this.actualizarColorHume();
      });
      
      // Llamar actualizarColorHume() al inicio para asegurar que se actualice correctamente
      this.actualizarColorHume();
    },
    actualizarColorHume() {
      // Obtener el estado actual de moto desde la base de datos
      const database = getDatabase();
      const homeRef = ref(database, "home/moto");
      onValue(homeRef, (snapshot) => {
        this.motoState = snapshot.val();
        if (this.motoState === 1) {
          this.humeBackground = "#FFD700"; // Amarillo
        } else {
          this.humeBackground = "white"; // Blanco
        }
      });
    },
  },
  created() {
    // Llamar a mostrar() al inicio para obtener los datos iniciales
    this.mostrar();
  },
};
</script>

<style>
#myDiv {
  width: 400px;
  height: 50px;
  border: 1px solid black;
}
#Hume {
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease;
}
</style>
