<template>
  <div>
    <v-app>
      <v-toolbar class="white">
        <v-btn icon @click.stop="rightDrawer = !rightDrawer" class="hidden-md-and-up" @click="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            flat
          >
            <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer
        temporary
        :right="right"
        v-model="rightDrawer"
        fixed
        app
      >
      </v-navigation-drawer>
      <v-content>
        <v-content>
          <router-view></router-view>
        </v-content>
        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12 offset-sm5>
              <div class="white--text ml-3">
                © 2015–2018 MyBrooklyn
                <v-icon class="red--text">favorite</v-icon>
                All Rights reserved.
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>

  </div>
</template>

<script>
export default {
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
      title: 'Vuetify.js'
    }
  },
  computed: {
    links () {
      return [
        {title: 'Главная', icon: 'home', url: '/'},
        {title: 'Каталог', icon: 'shopping_cart', url: '/catalog'},
        {title: 'Контакты', icon: 'contacts', url: '/contact'}
      ]
    }
  },
  name: 'App'
}
</script>
