<template>
  <v-footer class="pa-3" color="transparent">
    <v-col class="text-center" cols="12">
      Developed with &nbsp;
      <v-icon small color="red">mdi-cards-heart</v-icon>&nbsp;and&nbsp;
      <v-icon small color="green">mdi-vuejs</v-icon>
      - &copy; {{ new Date().getFullYear() }}
    </v-col>
    <!-- <v-col>
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41102502000095"
      >
        <img
          src="temp/temp/default/default-0001/1/images/gawbatb.png"
          style="float: left"
        /><em>赣ICP备2022006857号</em></a
      >
    </v-col> -->
  </v-footer>
</template>

<script>
export default {
  name: "MyFooter",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>