<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>{{ message }}</h1>
      <v-btn @click="onClick">Click Me</v-btn>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("hello world");
const onClick = () => {
  message.value = "btn clicked";
};
</script>
