<template>
  <v-app light>
    <v-content>
      <section>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="item in products"
            :key="item.id"
            :src="item.imageSrc"
          >
            <v-layout style="margin-top: 200px" column align-center justify-center>
              <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
              <em>Kick-start your application today</em>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </v-btn>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
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
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
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
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">О нас</div>
                </v-card-title>
                <v-card-text>
                  Мы предоставляем качественный товар по доступным ценам.
                  В нашей колекции большой асортимент продукции.
                  Оптовая и розничная реализация.
                  Регулярное обновление товаров каталога.
                  Обувь от лучших производителей.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Наши Котакты</div>
                </v-card-title>
                <v-card-text>
                  Наш адрес <br>
                  вулиця Попудренка, 52, Київ, 02000
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>097-943-3618</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Kiev, UKRAINE</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>mybrooklin@notice.mail</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>


    </v-content>
  </v-app>
</template>

<script>
    export default {
      name: 'Home',
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
