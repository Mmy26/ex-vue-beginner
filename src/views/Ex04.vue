<template>
  <div>
    <div><input type="number" value="item1" v-model.number="item1" /></div>
    <div><input type="number" value="item2" v-model.number="item2" /></div>
    <div><input type="number" value="item3" v-model.number="item3" /></div>
    <div>税抜き価格：{{ (item1 + item2 + item3).toLocaleString() }}円</div>
    <div>
      税込み価格：{{
        Math.floor((item1 + item2 + item3) * 1.1).toLocaleString()
      }}円
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private item1 = 0;
  private item2 = 0;
  private item3 = 0;
  private total = 0;
}
</script>

<style scoped></style>
