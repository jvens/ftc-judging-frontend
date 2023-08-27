<template>
  <v-app :theme="themes[themeIdx]">
    <default-bar v-on:toggle-nav="navOpen = !navOpen" v-on:toggle-darkmode="themeIdx = (themeIdx + 1) % themes.length"
      event-name="Super Qualifier" />
    <NavigationDrawer v-model="navOpen" />
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import NavigationDrawer from './NavigationDrawer.vue';
import { ref } from 'vue'
// import { useTheme } from 'vuetify/lib/framework.mjs';

const navOpen = ref(true)

// const theme = useTheme()
// console.log('themes:', theme.themes.value)
const themes = ['light', 'dark']
const themeIdx = ref(0)

</script>
