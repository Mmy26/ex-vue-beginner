<template>
  <div>
    <p>名前：{{ myName }}</p>
    <p>年齢：{{ myAge }}歳</p>
    <p>１０年後の年齢：{{ myAgeAfter10 }}歳</p>
    <span v-for="myHobby of myHobbies" v-bind:key="myHobby">{{ myHobby }}</span>
    <br />
    <a v-bind:href="url">自社ページリンク</a>
    <img v-bind:src="imgUrl" /><br />
    <button type="button" v-on:click="exist" v-bind:disabled="canNotPush">
      ボタン
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private myName = "";
  private myAge = 0;
  private myAgeAfter10 = 0;
  private myHobbies = new Array<string>();
  private url = "";
  private imgUrl = "";
  private canNotPush = false;

  exist(): void {
    this.myName = "正村悠";
    this.myAge = 28;
    this.myAgeAfter10 = this.myAge + 10;
    this.myHobbies = ["スイム ", "バイク ", "ラン "];
    this.url = "https://www.rakus-partners.co.jp/";
    this.imgUrl = "img/rakus.png";

    if (!this.canNotPush) {
      this.canNotPush = true;
    }
  }
}
</script>

<style scoped>
div {
  text-align: left;
  border: solid;
}
</style>
