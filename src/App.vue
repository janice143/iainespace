<template>
  <v-app>
    <v-container align-center>
      <Header :goDark="goDark" @changeTheme="updateTheme($event)"/>
      <router-view></router-view>
      
    </v-container>
    <Footer />
  </v-app>
  
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Footer,
    Header
  },

  data: () => ({
    goDark: false,

  }),
  methods:{
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
      this.$vuetify.theme.dark = this.goDark
    }
  }
};
</script>


