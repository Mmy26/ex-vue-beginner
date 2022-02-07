<template>
  <div>
    <input type="text" value="num1" v-model.number="num1" />
    ＋
    <input type="text" value="num2" v-model.number="num2" />
    =
    {{ total() }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private num1 = 0;
  private num2 = 0;

  total(): number {
    return this.num1 + this.num2;
  }
}
</script>

<style scoped></style>
