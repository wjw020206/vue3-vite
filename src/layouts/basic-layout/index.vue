<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
