<template>
  <v-navigation-drawer :model-value="isOpen || rail" v-on:update:model-value="(val) => emit('update:modelValue', val)"
    :rail="rail">
    <v-list density="compact" nav>

      <v-list-item v-for="(page, i) in globalPages" :key="i" :value="page" color="primary" :to="page.to">
        <template v-slot:prepend>
          <v-icon :icon="page.icon" />
        </template>
        <v-list-item-title v-text="page.text" />
      </v-list-item>
      <v-divider />
      <v-list-item v-for="(page, i) in eventPages" :key="i" :value="page" color="primary" :to="page.to">
        <template v-slot:prepend>
          <v-icon :icon="page.icon" />
        </template>
        <v-list-item-title v-text="page.text" />
      </v-list-item>
      <v-divider v-if="isDebug" />
      <v-list-item v-if="isDebug" v-for="(page, i) in debugPages" :key="i" :value="page" color="primary" :to="page.to">
        <template v-slot:prepend>
          <v-icon :icon="page.icon" />
        </template>
        <v-list-item-title v-text="page.text" />
      </v-list-item>

    </v-list>
    <template v-slot:append>
      <v-footer v-if="!rail">
        (c) Jeramie Vens<br>
        Version 1.0.0
      </v-footer>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean | null | undefined
}>()
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)
watch(() => props.modelValue, (val) => isOpen.value = val)


const isDebug = true

const drawer = ref(true)
const rail = ref(false)

const globalPages = ref([
  { text: 'Select Event', icon: 'mdi-home-switch', to: '/' },
])

const eventPages = ref([
  { text: 'Event Home', icon: 'mdi-home', to: '/event' },
  { text: 'Award Selection', icon: 'mdi-view-dashboard-variant', to: '/event/selections' },
  { text: 'Match Observation', icon: 'mdi-eye', to: '/event/observation' },
  { text: 'Team List', icon: 'mdi-table-of-contents', to: '/event/teams' },
  { text: 'FTC Live Server', icon: 'mdi-server-network', to: '/event/server' },
  { text: 'Event Settings', icon: 'mdi-cog', to: '/event/settings' },
])

const debugPages = ref([
  { text: 'Database Explorer', icon: 'mdi-database', to: '/admin/db' },
  { text: 'Server Logs', icon: 'mdi-server', to: '/admin/server' },
  { text: 'Client Logs', icon: 'mdi-bug', to: '/admin/client' }
])

const eventDetails = ref(null)
const open = ref([])
// <v-list-item prepend-icon="mdi-server-network" title="FTC Live Connection" to="ftc_live"/>

</script>