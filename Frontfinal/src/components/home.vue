<template>
<div>
<div>
    <h1 class="headline font-weight-bold mb-3 white--text text-center">Testimonios</h1>
</div>
    <div class="row mt-md-5 mt-sm-5 mt-xs-5 " >
        
    <v-card :loading="loading"
    class="mt-sm-5 mx-auto"
    max-width="350"
    elevation="14"

    v-for="miembro in team" :key="miembro.codigo">
    <div class="d-flex justify-content-center p-2 ">
                            <v-img  
      :src="miembro.image" height="200px">   
        </v-img>
                        </div>
        
        <v-card-title>{{miembro.nombre}}</v-card-title>
    <v-card-subtitle>{{miembro.empresa}}</v-card-subtitle>
<v-card-text>
      
    <div>{{miembro.descripcion}}</div>
    </v-card-text>
    </v-card>
    </div>

</div>
    
</template>


<script>
import axios from 'axios';
export default {
     data() {
        return {
            
            team: [{
                nombre: 'Eduardo',
                descripcion: 'estar en la red de emprendimiento me dio la oportunidad de conectar con personas que al igual que yo buscaban expandir sus negocios. Hoy somos una red gigante que no para de ayidar aa consolidación de grandes emprendimientos.',
                image:require('@/assets/img/Eduardo.jpg'),
                empresa:'Domum inmobilaria'
            }, {
                nombre: 'Santiago',
                descripcion: 'Como seres humanos es importante aprender todos los días, no importa si es algo o nuevo o no. Por eso recomiendo a ojos cerrados el tipo de educación que brindan en esta página, no solo es contenido actualizado sino que la metodología que utilizan es genial. Excelente servicio!',
                image:require('@/assets/img/Santiago.jpg'),
            }, {
                nombre: 'Samara Cerezo',
                descripcion: 'Al ser emprendedores muy poco es el conocimiento legal que tenemos lo que nos lleva a pasar por alto numerosos aspectos dentro de esos campos. Por eso agradezco esta tipo de publicaciones, servicios que están a nuestro alcance y nos ayudan un montón en nuestros negocios.',
                image:require('@/assets/img/Samara.jpg'),
                empresa:' '
            }, {
                nombre: 'Iris Mesa',
                descripcion: 'Este tipo d e publicaciones son muy útiles y totalmente necesarias para campos en donde se nos olvida que podemos innovar, como el de la gestión humana. Grafias a ella podemos generar espacios de reflexión y discusión en torno a la creación de  oportunidades dentro de las empresas',
                image:require('@/assets/img/Iris.jpg'),
                empresa:'Soluciones Tech'
}]
        };
    },
  
    
}
</script>