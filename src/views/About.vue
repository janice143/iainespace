<template>
  <v-container class="mt-4 pt-4">
    <v-row no-gutters class="mt-4 pt-2">
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-card flat color="transparent">
          <v-card-title>
            <h2 class="mb-2 hidden-sm-and-down">找到我</h2>
            <h2 class="mb-2 hidden-md-and-up text-h6">找到我</h2>
          </v-card-title>
          <v-card-text class="text-subtitle-1">
            <div class="py-4 subheading">
              <v-icon color="purple" left>mdi-map-marker</v-icon>
              <span>浙江，金华</span>
            </div>
            <div class="py-4 subheading">
              <v-icon color="purple" left>mdi-email</v-icon>
              <span>lanyp_iaine@163.com</span>
            </div>
            <div class="py-4 subheading">
              <v-icon color="purple" left>mdi-wechat</v-icon>
              <span>__A4u__</span>
            </div>
            <div class="py-4 subheading">
              <v-icon color="purple" left>mdi-checkbox-marked-circle</v-icon>
              <span>马上要毕业了，在找工作</span>
            </div>
            <div>
              <v-btn
                class="mr-3"
                v-for="icon in icons"
                :key="icon.icon"
                small
                icon
                fab
                dark
                outlined
                color="purple"
                :href="icon.href"
                target="_blank"
              >
                <v-icon>{{ icon.icon }}</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
        <v-card flat color="transparent">
          <v-card-title>
            <h2 class="mb-2 hidden-sm-and-down">给我发邮件</h2>
            <h2 class="mb-2 hidden-md-and-up text-h6">给我发邮件</h2>
          </v-card-title>
          <v-card-text class="text-subtitle-1">
            <form method="POST" action="https://formspree.io/f/mnqwkyee">
              <v-text-field
                name="name"
                color="purple"
                background-color="transparent"
                v-model="name"
                :error-messages="nameErrors"
                label="名字"
                required
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                type="email"
                color="purple"
                background-color="transparent"
                name="email"
                v-model="email"
                :error-messages="emailErrors"
                label="邮箱"
                required
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-textarea
                color="purple"
                background-color="transparent"
                :counter="200"
                v-model="body"
                :error-messages="bodyErrors"
                label="内容"
                name="body"
                @blur="$v.body.$touch()"
              ></v-textarea>
              <v-btn
                @click="submit"
                type="submit"
                color="purple"
                class="white--text"
                :disabled="body.length <= 20"
                >发送</v-btn
              >
              <v-btn class="ml-4" @click="clear">清除</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength,
} from "vuelidate/lib/validators";
export default {
  name: "IainespaceAboutme",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    body: { required, minLength: minLength(20) },
  },
  data() {
    return {
      name: "",
      email: "",
      body: "",
      icons: [
        { href: "https://github.com/janice143", icon: "mdi-github" },
        {
          href: "https://juejin.cn/user/2889962280982936",
          icon: "mdi-alpha-j-circle-outline"
        },
        {
          href: "https://janice143.github.io/myblog.github.io/",
          icon: "mdi-alpha-b-circle-outline"
        }
        
      ],
    };
  },

  mounted() {},

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push("名字不超过20个字");
      !this.$v.name.required && errors.push("必填");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("请填一个有效的邮箱");
      !this.$v.email.required && errors.push("必填");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength && errors.push("内容至少20个字");
      !this.$v.body.required && errors.push("必填");
      return errors;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>