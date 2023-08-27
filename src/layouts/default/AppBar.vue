<template>
  <v-app-bar color="primary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon exact data-testid="btn-nav-open" @click="emits('toggleNav')" />
    </template>
    <template v-slot:title>
      <v-app-bar-title> FTC Judging <span v-if=eventName>| {{ eventName }}</span></v-app-bar-title>
    </template>
    <template v-slot:append>
      <v-btn data-testid="btn-darkmode" icon="mdi-theme-light-dark" @click="emits('toggleDarkmode')" />
      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>

//
const props = defineProps<{
  eventName?: String

}>()
const emits = defineEmits<{
  toggleNav: [],
  toggleDarkmode: [],
}>()

</script>
