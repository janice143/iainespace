<template>
  <v-container class="mt-4 pt-4">

    <div style="text-align: center" class="mt-4 pt-2">
      <h2 class="mb-2 hidden-sm-and-down">嘿，我是iaine，这里展示我的另一面</h2>
      <h2 class="mb-2 hidden-md-and-up text-h6">
        嘿，我是iaine，这里展示我的另一面
      </h2>
      <p class="mt-4">
        我热爱前端开发，所以自学了很多相关技术。但是除此之外，这几年里我也花了很多时间在我的专业领域上
      </p>
      <br />
    </div>
    <div>
      <v-row class="mt-4">
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
          <v-timeline dense align-top>
            <v-timeline-item color="cyan" small>
              <template>
                <span
                  class="`headline font-weight-bold cyan--text`"
                  v-text="2016"
                ></span>
              </template>
              <div class="py-4">
                <div style="text-align: left">
                  我在2016年进入大学，专业是光电信息科学与工程。在这里专业里我学习很多关于光和电的知识
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="green" small>
              <template>
                <span
                  class="`headline font-weight-bold green--text`"
                  v-text="2017"
                ></span>
              </template>
              <div class="py-4">
                <div style="text-align: left">
                  大二的时候对物理光学产生了兴趣，所以进入了光场调控实验室（浙江省重点实验室），提前接触了科研
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="pink" small>
              <template>
                <span
                  class="`headline font-weight-bold green--text`"
                  v-text="2019"
                ></span>
              </template>
              <div class="py-4">
                <div style="text-align: left">
                  大三研究自加速光束、涡旋光束，在导师的指导下，发表<span class="purple--text">SCI
                  II区论文</span>两篇，还被学校官方报道。同时准备考研
                  <p>
                    <v-btn
                      color="pink"
                      class="mx-0 mt-2"
                      outlined
                      href="http://news.zjnu.edu.cn/2019/0411/c8450a287320/page.htm"
                      target="_blank"
                    >
                      查看 →
                    </v-btn>
                  </p>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
          <v-timeline dense align-top>
            <v-timeline-item color="amber" small>
              <template>
                <span
                  class="`headline font-weight-bold green--text`"
                  v-text="2020"
                ></span>
              </template>
              <div class="py-4">
                <div style="text-align: left">
                  对光场调控领域有一些理解后，在导师带领下，我们课题组希望把这项技术落到实际有用的地方。
                  于是便借助创新创业等比赛和项目，来实现我们的想法，所以我在大四研一参加了很多创新创业类竞赛，作为负责人带领团队勇敢地创新创业，我们最终获得了<span class="purple--text">很多国奖和省奖</span>。
                  同时，这个时候我已经顺利考上本校研究生了
                  <p>
                    <v-btn
                      outlined
                      color="primary"
                      class="mx-0 mt-2"
                      href="https://baijiahao.baidu.com/s?id=1730003493806065742&wfr=spider&for=pc"
                      target="_blank"
                    >
                      查看 →
                    </v-btn>
                  </p>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="purple" small>
              <template>
                <span
                  class="`headline font-weight-bold green--text`"
                  v-text="2022"
                ></span>
              </template>
              <div class="py-4">
                <div style="text-align: left">
                  马上要研三了，我还在光学领域学习着，并且还有一年即将毕业。虽然我的未来职业规划是<span class="purple--text">前端开发</span>，但是我始终对这领域保存热热情。
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </div>
    <br><br>
    <v-carousel height="400px">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <p class="mt-4 gray--text text-center" light>注※：（在第一张照片中，从左到右第四个是我😀）</p>
  </v-container>
</template>

 
<script>
export default {
  name: "IainespaceAnotherme",

  data() {
    return {
      dialog: false,
      model: 0,
      items: [
        {
          src: "https://s6.jpg.cm/2022/07/15/P5AsI6.jpg",
        },
        {
          src: "https://s6.jpg.cm/2022/07/15/P5AEcT.jpg",
        },
        {
          src: "https://s6.jpg.cm/2022/07/15/P5AkxQ.jpg",
        },
        {
          src: "https://s6.jpg.cm/2022/07/15/P5Aplh.png",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>