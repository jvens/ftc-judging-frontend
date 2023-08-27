import AppVue from "@/App.vue";
import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import { describe, it } from "vitest";
import { expect } from "vitest";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { Component } from "vue";

const vuetify = createVuetify()


global.ResizeObserver = require('resize-observer-polyfill')

describe('App Component', () => {
  const mockDefaultLayout: Component = {
    template: '<router-view />',
  }

  const homeRoute: RouteRecordRaw = {
    path: '/',
    component: { template: '<div>Home</div>' },
  }
  const eventRoute: RouteRecordRaw = {
    path: '/event',
    component: { template: '<div>Event</div>' },
  }
  const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes: [homeRoute, eventRoute] })


  it('Renders properly', async () => {
    const wrapper = mount(AppVue, {
      global: {
        plugins: [vuetify, router],
        stubs: {
          DefaultLayout: mockDefaultLayout
        },
      },
    })
    console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
    console.log(wrapper.html())
  })

  it('Routes to different pages', async () => {
    const wrapper = mount(AppVue, {
      global: {
        plugins: [vuetify, router],
        stubs: {
          DefaultLayout: mockDefaultLayout
        },
      },
    })
    await router.push('/')
    expect(wrapper.find('div').text()).toContain('Home')
    await router.push('/event')
    expect(wrapper.find('div').text()).toContain('Event')
  })
})
