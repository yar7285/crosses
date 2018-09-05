<template>
 <v-container>
   <v-layout justify-space-between row fill-height>
     <v-flex xs6>
       <v-card>
         <v-carousel hide-delimiters>
           <v-carousel-item
             src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
             style="height:100%"
             :key="1"
           ></v-carousel-item>
           <v-carousel-item
             src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
             :key="2"
           ></v-carousel-item>
         </v-carousel>
       </v-card>
     </v-flex>
     <v-flex xs6 ml-3>
       <br>
         <v-title class="display-3">Nike1</v-title> </br>
          <v-icon>done</v-icon>
          <v-text class="">В наличии</v-text>

           <v-icon>close</v-icon>
           <v-text class="">Нет в наличии</v-text>

         <v-text class="subheading">
           <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias beatae, blanditiis dicta
             doloremque doloribus eligendi est fugiat ipsa labore possimus, suscipit voluptates. Deleniti dolorem natus
             praesentium. Eveniet, fugit, vitae.
           </div>
         </v-text>

       <v-text>
        <span class="title">Цена</span></br>
         <span class="old-price"><strike>1600 грн</strike></span>
         <span class="туц-price">1000 грн</span>
       </v-text>
       <v-text>
         <span>ВЫБЕРИ СВОЙ РАЗМЕР</span>

       </v-text>

       </v-card>
     </v-flex>
   </v-layout>
 </v-container>

</template>

<script>
    export default {
      name: 'Product'
    }
</script>

<style scoped>

</style>
