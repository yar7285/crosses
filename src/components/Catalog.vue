<template>
        <v-content>
          <section >
            <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="600">
              <v-layout
                column
                align-center
                justify-center
                class="white--text"
              >
                <img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="Vuetify.js" height="200">
                <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
                <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                <v-btn
                  class="blue lighten-2 mt-5"
                  dark
                  large
                  href="/pre-made-themes"
                >
                  Get Started
                </v-btn>
              </v-layout>
            </v-parallax>
          </section>
          <section>
            <v-layout
              column
              wrap
              class="my-5"
              align-center
            >
              <v-flex xs12 sm4 class="my-3">
                <div class="text-xs-center">
                  <h2 class="headline">The best way to start developing</h2>
                  <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout row wrap align-center>
                    <v-flex xs12 sm6 md4 v-for="product in products" :key="product.id">
                      <v-card>
                        <v-card-media
                          :src="product.imageSrc"
                          height="200px"
                        ></v-card-media>

                        <v-card-title primary-title class="text-xs-center">
                          <div>
                            <h3 class="headline mb-0 text-xs-center">{{product.title}}</h3>
                            <div class="text-xs-center">Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.</div>
                          </div>
                        </v-card-title>

                        <v-card-actions center>
                          <v-btn flat color="orange" :to="'/product/' + product.id">Open</v-btn>
                          <v-btn raised color="orange" :to="'/order/' + product.id">Buy</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                  <div class="text-xs-center">
                    <v-pagination
                      v-model="page"
                      :length="6"
                    ></v-pagination>
                  </div>
                </v-container>
              </v-flex>
            </v-layout>
          </section>
        </v-content>
</template>

<script>
    export default {
      name: 'Catalog',
      data () {
        return {
          clipped: false,
          drawer: true,
          fixed: false,
          items: [{
            icon: 'bubble_chart',
            title: 'Inspire'
          }],
          miniVariant: false,
          right: true,
          rightDrawer: false,
          title: 'Vuetify.js',
          products: [
            {title: 'nike', description: 'sssss', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', id: 1112},
            {title: 'nike1', description: 'sssss1', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', id: 1112},
            {title: 'nike2', description: 'sssss2', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', id: 1112}
          ]
        }
      }
    }
</script>

<style scoped>

</style>
