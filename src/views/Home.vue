<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1280"
      img-height="853"
    >
      <b-carousel-slide
        img-src="https://baufest.com/wp-content/uploads/2020/04/Digitalizaci%C3%B3n_de_negocios_Las_empresas_tech_como_modelos_a_seguir_Mesa_de_trabajo_1.jpg"
      >
        <div class="slider-content">
          <h1 style="color: white; font-size: 400%">
            Soluciones
            <span style="color: green">completas </span> y
            <span style="color: green"> reales </span>que garantiza ventajas
            estrategicas
          </h1>

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="https://gdx-group.com/wp-content/uploads/2020/04/empresa-automatizada.jpg"
      >
        <div class="slider-content">
          <h1 style="color: white; font-size: 400%">
            Dinamizamos el
            <span style="color: green">cambio </span> y la
            <span style="color: green"> evolucion </span>digital de su negocio.
          </h1>

          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://magmadigital.es/files/sites/379/2021/03/industria40-magmadigital-empresa.jpg"
      >
        <h1 style="color: green; font-size: 400%">
          Innovacion y mente abierta para enfrentar los constantes retos y
          cambios planteados.
        </h1>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://olympoboxes.com/wp-content/uploads/2019/05/business-3370832_1280.jpg"
      >
        <i style="font-size: 400%; color: green"> Responsabilidad </i>
        <br />
        <i style="font-size: 400%; color: green">
          Ética
          <br />
        </i>
        <i style="font-size: 400%; color: green"> Sostenibilidad </i>
        <br />
        <h1 style="color: white; font-size: 400%">
          <br />
          Para construir futuro.
        </h1>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </b-carousel-slide>
    </b-carousel>


  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

