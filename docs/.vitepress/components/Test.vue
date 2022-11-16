<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const add = () => {
  num.value++
}
</script>

<template>
  <div class="border">
    <div class="num">{{ num }}</div>
    <button class="btn" @click="add">+</button>
  </div>
</template>

<style>
.border {
  text-align: center;
}
.btn {
  width: 50px;
  height: 30px;
  border: 1px solid green;
  border-radius: 15px;
}
</style>
