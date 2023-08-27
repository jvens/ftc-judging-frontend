// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import PlaceholderView from '@/views/PlaceholderView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/event',
    name: 'Event Home',
    component: PlaceholderView, //() => import(/* webpackChunkName: "event" */ '@/views/EventHome'),
  },
  {
    path: '/event/selections',
    name: 'Award Selections',
    component: PlaceholderView,
  },
  {
    path: '/event/observation',
    name: 'Match Observation',
    component: PlaceholderView,
  },
  {
    path: '/event/teams',
    name: 'Teams',
    component: PlaceholderView,
  },
  {
    path: '/event/server',
    name: 'FTC Live Server',
    component: PlaceholderView,
  },
  {
    path: '/event/settings',
    name: 'Event Settings',
    component: PlaceholderView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: PlaceholderView,
  },
  {
    path: '/admin/db',
    name: 'Database',
    component: PlaceholderView,
  },
  {
    path: '/admin/server',
    name: 'Server Logs',
    component: PlaceholderView,
  },
  {
    path: '/admin/client',
    name: 'Client Logs',
    component: PlaceholderView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
