<template>
 <div class="container">
    <div class="colums">
<div class="column is-6 is-offset-3">
<br><br>

              <center>
                <form class="box">
                <div class="field">
                  
        <h1 class="title is-3" align="center">MyApp</h1>
        <hr />
<br>
<h4 >Supervision temperatura, humedad y operacion del actuador</h4>
                  
              <button type="button" class="btn btn-primary" @click.prevent="encender" >On Moto bomba</button><p/>
              <button type="button" class="btn btn-primary" @click.prevent="apagar" >Off Moto bomba</button>
              <br><br>
              <button type="button" class="button is-primary" @click.prevent="mostrar" >Mostrar</button>

              <br>
              <div id="Tempe" > </div>
              <div id="Hume" > </div>  
                </div>
                </form>
              </center> 





    </div>

  </div>
<br><br>
   </div>


</template>
<script>
import { db,database } from "../main.js";
import { collection, addDoc} from "firebase/firestore";
import { ref, set, getDatabase, onValue } from "firebase/database";
export default {
  data() {
    return {
      newItem: ""
    };
  },
  methods: {

    async addItem() {
      if (this.newItem) {
        try {
          const docRef = await addDoc(collection(db, "users"), {
          nombre: this.newItem,
          });
          console.log("Document written with ID: ", docRef.id);
          } catch (e) {
          console.error("Error adding document: ", e);
      }


  }
 },
  async encender() 
            {
              set(ref(database, 'home'), {
              led1: "True",

  });
},
  async apagar() 
            {
              set(ref(database, 'home'), {
              led1: "False",

  });
 },
  async mostrar() 
            {
          const database = getDatabase();
          const starCountRef = ref(database, 'home');
          onValue(starCountRef, (snapshot) => {
          this.data = snapshot.val();
          console.log(this.data)
          document.getElementById('Tempe').innerHTML= "Temperatura: " + snapshot.val().Temp + "°c";
          document.getElementById('Hume').innerHTML= "Humedad: " + snapshot.val().Hume + "%";
  
 });
 }

  }
}

           
</script> 
