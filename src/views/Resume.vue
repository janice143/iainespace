<template>
  <v-container class="mt-4 pt-2">
    <v-row class="mt-4 pt-4">
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <h2 class="mb-4 ml-4">前端开发路线</h2>
        <v-timeline align-top dense>
          <v-timeline-item color="purple" small>
            <v-layout>
              <v-flex xs4>
                <div class="caption font-weight-bold purple--text">2022-3</div>
                <div class="caption font-weight-bold purple--text">至今</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>浏览器原理、计算机网络</strong>
                <div class="caption mb-2">
                  <a href="https://www.yuque.com/i_geek/rules/usyfem"
                    >博客学习</a
                  >
                  <br />
                  <a
                    href="https://www.icourse163.org/course/NJAU-1001752039?from=searchPage&outVendor=zw_mooc_pcssjg_"
                    >中国慕课视频</a
                  >
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="purple" small>
            <v-layout>
              <v-flex xs4>
                <div class="caption font-weight-bold purple--text">2021-5</div>
                <div class="caption font-weight-bold purple--text">2021-6</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>MongoDB数据库 </strong>
                <div class="caption mb-2">
                  <a href="https://www.youtube.com/watch?v=ofme2o29ngU&t=1460s"
                    >Web Dev Simplify 油管知名前端教学博主</a
                  >
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="purple" small>
            <v-layout>
              <v-flex xs4>
                <div class="caption font-weight-bold purple--text">2021-3</div>
                <div class="caption font-weight-bold purple--text">2021-5</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Node.js，Express.js </strong>
                <div class="caption mb-2">
                  <a href="https://www.youtube.com/watch?v=Oe421EPjeBE"
                    >freeCodeCamp 油管知名计算机教学博主</a
                  >
                  <br />
                  <a href="https://edu.aliyun.com/roadmap/frontend"
                    >阿里云前端开发学习路线</a
                  >
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="purple" small>
            <v-layout>
              <v-flex xs4>
                <div class="caption font-weight-bold purple--text">2021-3</div>
                <div class="caption font-weight-bold purple--text">2020-9</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Vue.js</strong>
                <div class="caption mb-2">
                  <a href="https://cn.vuejs.org/">vue 官方文档</a><br />
                  <a href="https://learning.dcloud.io/#/"
                    >Dcloud视频 vue官方网文档推荐教学视频</a
                  >
                  <br />
                  <a href="https://edu.aliyun.com/roadmap/frontend"
                    >阿里云前端开发学习路线</a
                  >
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="purple" small>
            <v-layout>
              <v-flex xs4>
                <div class="caption font-weight-bold purple--text">2019-12</div>
                <div class="caption font-weight-bold purple--text">2019-9</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Javascript， ES6</strong>
                <div class="caption mb-2">
                  <a href="https://www.youtube.com/watch?v=jS4aFq5-91M"
                    >freeCodeCamp</a
                  ><br />
                  <a
                    href="https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc"
                    >The Net Ninja 油管知名前端教学博主</a
                  ><br />
                  <a href="https://tsejx.github.io/javascript-guidebook/"
                    >JavaScript Guidebook</a
                  >
                  <br />
                  <a href="https://edu.aliyun.com/roadmap/frontend"
                    >阿里云前端开发学习路线</a
                  >
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="purple" small>
            <v-layout>
              <v-flex xs4>
                <div class="caption font-weight-bold purple--text">2018-9</div>
                <div class="caption font-weight-bold purple--text">2017-9</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Html, CSS</strong>
                <div class="caption mb-2">
                  <a href="https://edu.aliyun.com/roadmap/frontend"
                    >阿里云前端开发学习路线</a
                  ><br />
                  <a
                    href="https://www.icourse163.org/course/BFU-1003382003?from=searchPage&outVendor=zw_mooc_pcssjg_#/info"
                    >Web前端开发 中国慕课国家精品课程</a
                  ><br />
                  <a href="https://www.runoob.com/css/css-tutorial.html"
                    >菜鸟教程</a
                  >
                  <br />
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <div>
          <h2 class="mb-4 ml-4">专业技能</h2>
          <v-list dense color="transparent">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon class="mx-0">
                <v-icon>mdi-circle-small</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-wrap" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <div class="mt-4 pt-4">
          <h2 class="mb-4 ml-4">教育经历</h2>
          <v-timeline align-top dense>
            <v-timeline-item color="purple" small>
              <v-layout>
                <v-flex xs4>
                  <div class="caption font-weight-bold purple--text">
                    2020-9
                  </div>
                  <div class="caption font-weight-bold purple--text">至今</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>浙江师范大学 —— 硕士</strong>
                  <div class="caption mb-2">
                    第十七届全国“挑战杯”竞赛 铜奖（排名1/10）<br />
                    发明专利授权<br />
                    考研英语87分（2020年考研英语一平均分49）
                  </div>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="purple" small>
              <v-layout>
                <v-flex xs4>
                  <div class="caption font-weight-bold purple--text">
                    2016-9
                  </div>
                  <div class="caption font-weight-bold purple--text">
                    2020-6
                  </div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>浙江师范大学 —— 学士</strong>
                  <div class="caption mb-2">
                    第八届全国光电竞赛二等奖（排名2/7）<br />
                    省政府奖学金<br />
                    2019级国家级创新创业项目负责人<br />
                    发表SCI II区论文2篇（一作）<br />
                    英语4级604分，英语六级527分
                  </div>
                </v-flex>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
    <!-- <div class="mt-4 pt-2 text-center">
      <v-btn
        href="https://janice143.github.io/thejanicelan/resume.html?file=lanyp-s-resume.pdf"
        target="_blank"
        color="purple"
        dark
        large
      >
        下载我的简历
        <v-icon right dark>mdi-file-download-outline</v-icon>
      </v-btn>
    </div> -->
  </v-container>
</template>

<script>
export default {
  name: "IainespaceResume",

  data() {
    return {
      items: [
        {
          text: "熟悉JavaScript,了解Typescript，掌握ES6常用语法，对js执行过程、作用域、闭包等有深入理解。",
        },
        {
          text: "熟练掌握vue.js开发，理解其响应式原理等底层逻辑；可配合element ui等组件库完成页面开发",
        },
        {
          text: "熟悉响应式、flex等页面布局方式，熟悉使用less等CSS预编译语言完成响应页面的搭建",
        },
        {
          text: "熟悉前后端分离的开发模式，能使用NodeJS, express, MongoDB，配合中间件编写数据接口，并有独立开发项目经验",
        },
        {
          text: "了解webpack打包工具，对webpack性能优化有一定了解；了解Git版本管理，有多人协作开发经验",
        },
        { text: "阅读英文文档无障碍，善于外网翻阅资料，解决问题" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
