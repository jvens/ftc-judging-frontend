<template>
  <v-app>
    <default-bar v-on:toggle-nav="navOpen = !navOpen" event-name="Super Qualifier" />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
import { ref } from 'vue'
const navOpen = ref(true)
</script>
