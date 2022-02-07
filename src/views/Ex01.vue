<template>
  <div>
    <p>名前：{{ myName }}</p>
    <p>年齢：{{ myAge }}歳</p>
    <p>１０年後の年齢：{{ myAge + 10 }}歳</p>
    <span v-for="myHobby of myHobbies" v-bind:key="myHobby">{{ myHobby }}</span>
    <br />
    <a v-bind:href="url">自社ページリンク</a>
    <img v-bind:src="imgUrl" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private myName = "正村悠";
  private myAge = 28;
  private myHobbies = ["スイム", "バイク", "ラン"];
  private url = "https://www.rakus-partners.co.jp/";
  private imgUrl = "img/rakus.png";
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
