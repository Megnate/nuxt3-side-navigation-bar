<script setup lang="ts" name="app">
import Todo from '@c/todo/Todo.vue'

const runtimeConfigKey = useRuntimeConfig()
const appConfigValue = useAppConfig()
// const { curTime } = useGetTime()
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    {{ runtimeConfigKey }}
    {{ appConfigValue }}
    <Todo />
  </div>
</template>
