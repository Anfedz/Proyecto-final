<template>
  <v-container fluid class="primary"> 
    <div>     <h1 class="headline font-weight-bold mb-3 white--text text-center">Servicios</h1></div>
    <v-layout >
      

    <div class="row mt-md-5 mt-sm-5 mt-xs-5">
      <v-card
        
        class="mt-sm-5 mx-auto"
        max-width="350"
        v-for="(articulo, index) of articulos"
        :key="index"
      >
        <v-img
          :src="getImgUrl(articulo.imagenurl)"
          height="200px"
          alt="Imagen del servicio"
        ></v-img>

        <v-card-title> {{ articulo.nombre }} </v-card-title>

        <v-card-subtitle> {{ articulo.categoria.nombre }} </v-card-subtitle>

        <v-spacer></v-spacer>

        <v-divider></v-divider>

        <v-card-text>
          {{ articulo.descripcion }}
        </v-card-text>
        <v-btn color="orange lighten-2" text> Explore </v-btn>
        <v-spacer></v-spacer>
      </v-card>
    </div>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Articulos",
  data() {
    return {
      articulos: [],
      full_data: [],
    };
  },

  mounted() {
    axios.get("http://localhost:3000/api/articulo/list").then((response) => {
      this.full_data = response.data;
      console.log(this.full_data);
      for (let i = 0; i < this.full_data.length; i++) {
        if (this.full_data[i].estado == "1") {
          this.articulos.push(this.full_data[i]);
          console.log(this.full_data[i]);
        }
      }
    });
  },
  methods: {
    getImgUrl(url) {
      return require("../assets/img/" + url);
    },
  },
};
</script>

<style scoped>
</style>