<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover text color="transparent">
              <v-img
                class=" mb-1"
                :src="project.poster"
                :alt="project.title"
                height="200"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-divider></v-divider>
              <v-card-title class="justify-center mt-1 subtitle-2" >
                {{project.title}}
              </v-card-title>
              <v-card-text>
                <div class="text-center">
                  <v-chip v-for="(tech, index) in project.tech" :key="index" class="mx-1">{{
                    tech
                  }}</v-chip>
                  </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-divider class="mt-4"></v-divider>
          <v-card-title class="mt-2">技术栈</v-card-title>
          <v-card-text>
            <v-chip-group>
              <v-chip v-for="(tech, index) in project.tech" :key="index">{{
                tech
              }}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" :href="project.git" target="_blank">
              <v-icon left>mdi-github</v-icon>源代码
            </v-btn>
            <v-btn text color="primary" :href="project.demo" target="_blank">
              <v-icon left>mdi-web</v-icon>在线地址
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: "师大Buy二手闲置交易平台",
          git: "https://github.com/janice143/vue3-school-buy/tree/dev",
          demo: "http://43.143.81.10:8080/",
          tech: ["Vue3", "ES6", "Axios", "Vuex","Typescript"],
          poster: "https://files.catbox.moe/0liq1p.png",
        },
        {
          dialog: false,
          title: "师大Buy后台管理系统",
          git: "https://github.com/janice143/cms-schoolbuy",
          demo: "http://43.143.81.10:9528/",
          tech: ["Vue2", "ElmentUI", "nodejs", "mongoDB","Echarts"],
          poster: "https://files.catbox.moe/lu3pvn.png",
        },
        {
          dialog: false,
          title: "可视化拖拽平台——低代码编辑器",
          git: "https://github.com/giraffecat/LowCode/tree/dev",
          demo: "http://43.143.81.10:8090/",
          tech: ["Vue", "Vuex","Element UI"],
          poster: "https://files.catbox.moe/a5gfh1.png",
        },
        {
          dialog: false,
          title: "vui组件库",
          git: "https://github.com/janice143/vui-components",
          demo: "https://mellow-taiyaki-3ea650.netlify.app/",
          tech: ["Vue", "Less"],
          poster: "https://files.catbox.moe/6rjk6o.png",
        },
        {
          dialog: false,
          title: "iainespace——个人作品集网站",
          git: "",
          demo: "",
          tech: ["Vue", "Vuetify", "VueRouter","Vuelidate"],
          poster: "https://files.catbox.moe/5eppc2.png",
        },
        {
          dialog: false,
          title: "我的hexo博客",
          git: "https://github.com/janice143/myblog.github.io",
          demo: "https://janice143.github.io/myblog.github.io/",
          tech: ["Hexo", "Markdown", "JavaScript"],
          poster: "https://files.catbox.moe/ixn7c7.png",
        },
        {
          dialog: false,
          title: "移动端——疫情信息查询",
          git: "https://github.com/janice143/vue-mobile-covid-info",
          demo: "https://snazzy-malabi-413029.netlify.app/",
          tech: ["Vue", "Swiper", "Vant","Echarts"],
          poster: "https://s6.jpg.cm/2022/07/21/P7Lv7w.png",
        },
        {
          dialog: false,
          title: "JS30——原生js30天挑战",
          git: "https://github.com/janice143/JavaScript30Program",
          demo: "",
          tech: ["Javascript", "ES6", "CSS3","HTML5"],
          poster: "https://files.catbox.moe/8yn4jl.png",
        },
        {
          dialog: false,
          title: "物电学院官网复刻",
          git: "https://github.com/janice143/zjnuphysics.github.io",
          demo: "https://janice143.github.io/zjnuphysics.github.io/",
          tech: ["Javascript", "ES6", "CSS3","HTML5"],
          poster: "https://files.catbox.moe/tm5ra1.png",
        },
        {
          dialog: false,
          title: "我的旧个人网站",
          git: "https://github.com/janice143/thejanicelan",
          demo: "https://janice143.github.io/thejanicelan/",
          tech: ["HTML", "CSS", "Javascript"],
          poster: "https://files.catbox.moe/js4xmc.png",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>