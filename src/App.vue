<template>
  <div id="app">
    <navigation />

    <router-view />
    <div class="row">
      <div class="col" align="center" style="border-radius: 10px">
        <br />
        <p style="color: green">Contacto:</p>
        <b-icon icon="pencil-fill" style="color: black" font-scale="1"></b-icon>
        <i style="color: green">Carrera 1 # 25D – 19</i> <br /><br />
        <b-icon icon="phone" style="color: black" font-scale="1"></b-icon>
        <i style="color: green"> 3166666636</i>
        <br /><br />
        <b-icon icon="envelope" style="color: green" font-scale="1"></b-icon>
        <i style="color: green"> myApp@grupoGreen.net</i>
      </div>
      <div class="col" align="center">
        <br />
        <p style="color: green">Certificaciones:</p>
        <img
          alt=""
          width="300"
          height="139"
          data-src="https://grupo-aci.net/wp-content/uploads/2020/12/BV_Cert_ISO9001-14001-45001-300x139.png"
          class="alignnone size-medium wp-image-3697 ls-is-cached lazyloaded"
          src="https://grupo-aci.net/wp-content/uploads/2020/12/BV_Cert_ISO9001-14001-45001-300x139.png"
        />
      </div>

      <div class="col" align="center">
        <br />
        <p style="color: green">Parther:</p>
        <img
          alt=""
          width="300"
          height="145"
          data-src="https://grupo-aci.net/wp-content/uploads/2020/12/siemens-300x145.png"
          class="alignnone wp-image-3802 size-medium ls-is-cached lazyloaded"
          src="https://grupo-aci.net/wp-content/uploads/2020/12/siemens-300x145.png"
        />
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>
<style lang="scss">
@import "./scss/App.scss";
</style>

<style>
.navbar {
  position: fixed;
  width: 100%;
  border-radius: 10px;
}

.titulo {
  color: green;
  text-shadow: green 0.1em 0.1em 0.2em;
  font-size: 30px;
}
.row {
  position: absolute;
  width: 100%;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  left: 12px;
}
</style>