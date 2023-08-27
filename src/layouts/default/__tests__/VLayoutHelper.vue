<template>
  <v-layout>
    <!-- <test-component v-bind="props"> -->
    <slot :bindProps="props"></slot>
    <!-- </test-component> -->
  </v-layout>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import { onMounted } from 'vue';
import { ref, Component } from 'vue';

// const testComponent = shallowRef(null as Component | null)

const passedProps = defineProps<{
  props?: any,
  // component: Component
}>()

console.log('props nav', passedProps.props)

// onMounted(() => {
//   testComponent.value = passedProps.component
// })

</script>