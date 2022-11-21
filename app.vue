<script setup lang="ts" name="app">
const runtimeConfigKey = useRuntimeConfig()
const appConfigValue = useAppConfig()
// const { curTime } = useGetTime()
</script>

<template>
  <div class="flex">
    <!-- <NuxtWelcome /> -->
    <div class="f">
      {{ runtimeConfigKey }}
    </div>
    <div class="s h-20 w-20 bg-black">
      {{ appConfigValue }}
    </div>
  </div>
</template>
