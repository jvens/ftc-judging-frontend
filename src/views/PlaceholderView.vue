<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>Placeholder</h1>
      <p>The <b>{{ name }}</b> page has not been created yet.</p>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const name = ref(route.name?.toString() ?? '')

watch(() => route.name, (value) => {
  name.value = value?.toString() ?? '';
})

console.log('route', name);
</script>