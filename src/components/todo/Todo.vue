<script setup lang="ts" name="Todo">
// nuxt3 自动加入了 https://github.com/antfu/unplugin-auto-import 中的自动引入插件
// import { ref } from 'vue'
// import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>

<template>
  <div class="todo-lists">
    <div class="todo">
      <input id="todo-list" type="checkbox" name="todo-thing">
      <input id="todo-text" type="text">
      <button>{{ x }}</button>
      <button>{{ y }}</button>
    </div>
    <div class="cor">
      {{ x }}, {{ y }}
    </div>
  </div>
</template>
