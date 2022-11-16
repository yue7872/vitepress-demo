---
title: 快速开始
lang: zh-CN
---

## 正确渲染

<demo src="../.vitepress/components/Test.vue" title="demo组件" desc="渲染组件及其代码" />

## 错误渲染

### demo 后面如果不是空格，而是换行符，就会出现换行渲染出错的情况

<demo
  src="../.vitepress/components/Test.vue"
  title="demo组件"
  desc="渲染组件及其代码"
/>

### 不断生成 demo-xxx.vue 文件

当使用 vue:demo 的格式而非`<demo />`时，只要修改 `demo.md` 文件，就会生成新的 demo-xxx.vue 文件

和当前文件在同一个文件夹内

```vue:demo
<script lang="ts" setup>
const number = 1
</script>

<template>
  <span>The number is {{ number }}</span>
</template>
```
