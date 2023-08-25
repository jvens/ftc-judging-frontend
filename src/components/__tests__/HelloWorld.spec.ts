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
    const wrapper = mount({ template: '<v-layout><HelloWorld/></v-layout>' }, {
      props: {},
      global: {
        components: {
          HelloWorld
        },
        plugins: [vuetify]
      }
    })
    expect(wrapper.text()).toContain('Welcome')
  })
})