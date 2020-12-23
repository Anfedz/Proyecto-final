        
<template >
  <div v-if="estado" >
    <v-app id="app"  >
      <div>
        
          <v-app-bar
            absolute
            class="primary"
            fixed
          >
            <v-toolbar-title class="white--text">D&A TALENT HUB</v-toolbar-title>

            <v-spacer></v-spacer>
            <a class="nav-link white--text" v-on:click="ingresar" href="# ">Sistema </a>
            
          </v-app-bar>
          
            
              <div class="accent">
                <carrusel />
              </div>
              <div class="primary">

                <descripcion/>
                <Articulos />
              
                <home />
              </div>
              
      <div>
        
        <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="teal accent">
          <strong class="subheading ">Contacto</strong>
          
          <v-spacer></v-spacer>
          
        </v-card-title>
        <v-card-text>
          <v-row justify="space-between">
          <v-col>  
          Barranquilla: Calle x#y-z  Tel:0333333
          </v-col>
          <v-col>
            contacto@D&A.com
          </v-col>
          </v-row>
          <v-row justify="space-between">
          <v-col>Bogota: Calle a#b-c Tel:544421418</v-col>  
          
          <v-col> <a href="https://github.com/Anfedz/Proyecto-final.git" class="accent--text">Repositorio</a></v-col>  
          </v-row>
           

          </v-card-text>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>D&A</strong>
        </v-card-text>
      </v-card>
    </v-footer>
      </div>              
            

        
      </div>
    </v-app>
  </div>
  <div v-else>
    <v-app id="app">
      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
      >
        <v-list dense>
          <template>
            <v-list-item @click="home">
              <v-list-item-action>
                <v-icon>home</v-icon>
              </v-list-item-action>
              <v-list-item-title> Inicio </v-list-item-title>
            </v-list-item>
          </template>
          <template v-if="logueado">
            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title> Gestión </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{ name: 'categoria' }">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Categorías </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{ name: 'articulo' }">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Servicios </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title> Administración </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{ name: 'usuario' }">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title> Usuarios </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="silver darken-3"
        dark
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <span class="hidden-sm-and-down">Sistema</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="salir()" icon v-if="logueado">
          <v-icon>logout</v-icon> Salir
        </v-btn>
        <v-btn :to="{ name: 'login' }" icon v-else>
          <v-icon>apps</v-icon> Login
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container fluid fill-height>
          <v-slide-y-transition mode="out-in">
            <router-view />
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <v-footer height="auto">
        <v-layout justify-center>
          <v-flex text-xs-center>
            <v-card flat tile color="primary" class="white--text">
              <v-card-text class="white--text pt-0">
                Proyecto final &copy;2020
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Articulos from "./components/Articulos.vue";
import Carrusel from "./components/Carrusel.vue";
import Descripcion from './components/descripcion.vue';
import HelloWorld from './components/HelloWorld.vue';
import home from "./components/home.vue";
export default {
  components: { home, Carrusel, Articulos, HelloWorld, Descripcion },
  name: "App",

  data() {
    return {
      drawer: false,
      estado: 1,
    };
  },

  computed: {
    logueado() {
      return this.$store.state.usuario;
    },
  },
  created() {
    this.$store.dispatch("autoLogin");
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
      this.estado = 1;
    },

    ingresar() {
      this.estado = 0;
    },

    home() {
      this.estado = 1;
    },
  },
};
</script>
