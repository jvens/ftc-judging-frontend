import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import HelloWorld from '../HelloWorld.vue'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')


describe('HelloWorld Component', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: {},
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.text()).toContain('hello world')
  })

  it('Button changes text', async () => {
    const wrapper = mount(HelloWorld, {
      props: {},
      global: {
        plugins: [vuetify]
      }
    })
    const btn = wrapper.find('button')
    expect(btn.exists()).toBe(true)
    await btn.trigger("click")
    expect(wrapper.text()).toContain('btn clicked')
  })
})