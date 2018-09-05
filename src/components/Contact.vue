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
    <v-container fluid>

          <v-layout mt-5 mb-5 >
            <v-flex xs12 sm4 offset-sm1 >
              <v-card class="elevation-12" >
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Свяжытесь с нами!</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form v-model="valid" ref="form" validation>
                    <v-text-field
                      prepend-icon="person"
                      name="name"
                      label="Name"
                      type="text"
                      v-model="name"
                      :rules="nameRules"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-text-field
                      prepend-icon="email"
                      name="email"
                      label="Email"
                      type="email"
                      v-model="email"
                      :rules="emailRules"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-textarea
                      prepend-icon="textsms"
                      v-model="message"
                      auto-grow
                      box
                      color="deep-purple"
                      label="Message"
                      rows="8"
                    ></v-textarea>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    @click="onSubmit"
                    :loading="loading"
                    :disabled="!valid || loading"
                  >Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm2>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Наш адрес!</v-toolbar-title>
                </v-toolbar>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
    </v-container>

  </v-content>
</template>

<script>
    export default {
      name: 'Contact'
    }
</script>

<style scoped>

</style>
