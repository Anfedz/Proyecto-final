<template>
  <v-carousel cycle    height="600"
    
    show-arrows-on-hover>
    <v-carousel-item
      
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
          {
            src: require('@/assets/img/frm_01.jpg')
          },
          {
            src: require('@/assets/img/frm_02.jpg')        },
          {
            src: require('@/assets/img/frm_03.jpg')         },
          {
            src: require('@/assets/img/frm_04.jpg')
          },
          {
            src: require('@/assets/img/frm_05.jpg')
          },
        ],
  }
  },
}

</script>