<template>
  <v-container class="mt-4 pt-4">
    <v-row no-gutters class="mt-4 pt-2">
      <v-card flat color="transparent" max-width="600">
        <v-card-title>
          <h2 class="mb-2 hidden-sm-and-down">Hello world，我是iaine</h2>
          <h2 class="mb-2 hidden-md-and-up text-h6">Hello world，我是iaine</h2>
          <v-spacer></v-spacer>
          <v-img
            class="hidden-lg-and-up"
            width="50"
            :aspect-ratio="1"
            src="https://s6.jpg.cm/2022/07/14/P5Ru3u.png"
          ></v-img>
        </v-card-title>
        <v-card-text class="text-subtitle-1">
          <div>
            <p class="mt-4">我有什么好介绍的呢？哦，对了，我是做前端开发的。大二接触前端，自学做了个转盘抽签网页给专业老师上课随机点名学生，这是我第一次的前端开发。</p>

            <p>
              大二大三在自己的专业上（光学工程），进实验室提前接触科研训练，期间以第一作者身份发表
              <span class="purple--text font-weight-bold"> SCI II </span
              >区论文2篇，觉得自己有搞研究的天分，准备本专业考研了。<a
                href="/anotherme"
                class="purple--text text-decoration-underline"
                light
                >（这里了解我的另一面）</a
              >
            </p>
            <p>
              研二开始意识到自己马上要毕业工作了，热爱编程，想当程序员，然后又开始进阶前端之路。到现在为止，已经熟练掌握HTML5，CSS3，ES6，可快速搭建前端界面；熟悉<span class="purple--text font-weight-bold">vue</span>技术栈，熟悉前后端分离的开发模式，有独立开发项目经验。
            </p>
            <p>
              这段时间学了很多的新技术，所以更新了一下我的个人主页。希望大家在这里玩得愉快！
            </p>

            <p class="text-subtitle-2">
              写于<vue-typer
                :text="text1"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="erasing"
                :pre-type-delay="70"
                :type-delay="70"
                :pre-erase-delay="1980"
                :erase-delay="150"
                erase-style="select-back"
                :erase-on-complete="false"
                caret-animation="smooth"
              ></vue-typer>
            </p>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn text href="/about" color="purple" class="font-weight-bold">
            联系我<v-icon class="pl-2" color="purple"
              >mdi-arrow-right-thin-circle-outline</v-icon
            >
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-spacer></v-spacer>
      <v-img
        class="hidden-md-and-down my-4"
        width="300"
        :aspect-ratio="1"
        src="@/assets/iaine.png"
      ></v-img>
    </v-row>
  </v-container>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "IainespaceHome",
  components: {
    "vue-typer": VueTyper,
  },
  data() {
    return {
      text1: ["2022年4月15日"],
      model: "body-1",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>