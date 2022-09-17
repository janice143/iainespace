<template>
  <v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="340">
      <v-list dense nav class="pt-4">
        <v-list-item v-for="item in items" :key="item.text" :to="item.route">
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dense color="transparent">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase"  @click.stop="$router.push('/home')" style="cursor: pointer;">iaine</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" >
        <v-tabs v-model="tab" align-with-title >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item.text" :to="item.route">
            {{ item.text }}
          </v-tab>
        </v-tabs>
      </v-toolbar-items> 
      <v-btn @click="changeTheme" depressed small class="ml-4" icon>
        <v-icon v-if="goDark === true">mdi-white-balance-sunny</v-icon>
        <v-icon v-else>mdi-weather-night</v-icon>
      </v-btn>
      
    </v-toolbar>

  </v-container>
</template>

<script>
export default {
  name: "MyHeader",
  props:{
    goDark: {
      type:Boolean
    }
  },
  data() {
    return {
      tab: null,
      drawer:null,
      
      items: [
        { text: "主页", route: "/home" },
        { text: "简历", route: "/resume" },
        { text: "作品集", route: "/portfolio" },
        { text: "关于", route: "/about" },
      ],
    };
  },

  mounted() {},
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    } 
  }
};
</script>

<style lang="scss" scoped>
</style>