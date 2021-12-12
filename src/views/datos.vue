<template>
  <div class="content">
    <p>User ID: {{ result.led1 }}</p>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    result: null
  }),
  created() {
    axios.get("https://app-proyecto2021-default-rtdb.firebaseio.com").then((result) => {
      this.result = result.data;
    })
  }
};
</script>
