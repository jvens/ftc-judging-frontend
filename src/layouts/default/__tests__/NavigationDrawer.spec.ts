import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import NavigationDrawer from '../NavigationDrawer.vue'
import VLayoutHelper from "./VLayoutHelper.vue"

const VLayout = components.VLayout

const vuetify = createVuetify({
  components,
  directives
})
global.ResizeObserver = require('resize-observer-polyfill')

let el = document.createElement('div')
el.id = 'app'
el.className = "v-layout"
el.style.zIndex = "1000"
document.body.appendChild(el)


describe('NavigationDrawer Component', () => {
  it('Renders properly', () => {
    const wrapper = mount({ template: '<v-layout><navigation-drawer :modelValue="false"/></v-layout>' }, {
      components: {
        NavigationDrawer
      },
      props: {
        modelValue: true
      },
      global: {
        plugins: [vuetify]
      },
    }).findComponent(NavigationDrawer)

    expect(wrapper.exists()).toBe(true)
  })

  it('Opens and closes with model value', async () => {
    const wrapper = mount({ template: `<v-layout-helper v-slot="{bindProps}"><navigation-drawer v-bind="bindProps"/></v-layout-helper>` }, {
      components: {
        NavigationDrawer,
        VLayoutHelper,
      },
      props: {
        props: {
          modelValue: true
        }
      },
      global: {
        plugins: [vuetify]
      },
    })

    // todo figure out how to actually test if the nav drawer is open/closed
    expect(wrapper.exists()).toBe(true)
  })
})