import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import { createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import AppBar from '../AppBar.vue'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('AppBar Component', () => {
  const global = {
    components: {
      AppBar
    },
    plugins: [vuetify]
  }

  it('Renders properly', () => {
    const wrapper = mount({ template: '<v-layout><AppBar/></v-layout>' }, {
      global,
    })

    expect(wrapper.text()).toContain('FTC Judging')
  })

  it('Shows event name', async () => {
    const eventName = 'Test Event'
    const wrapper = mount({ template: '<v-layout><AppBar event-name="' + eventName + '"/></v-layout>' }, {
      global,
    })
    expect(wrapper.text()).toContain(eventName)
  })

  it('Emits event when menu opened', async () => {
    const layoutWrapper = mount({ template: '<v-layout><AppBar/></v-layout>' }, {
      global
    })
    const wrapper = layoutWrapper.findComponent(AppBar)
    const btn = wrapper.find('[data-testid="btn-nav-open"]')
    expect(btn.exists()).toBe(true)
    await btn.trigger("click")
    expect(wrapper.emitted()).toHaveProperty('toggleNav')
  })

  it('Emits event when darkmode button clicked', async () => {
    const layoutWrapper = mount({ template: '<v-layout><AppBar/></v-layout>' }, {
      global
    })
    const wrapper = layoutWrapper.findComponent(AppBar)
    const btn = wrapper.find('[data-testid="btn-darkmode"]')
    expect(btn.exists()).toBe(true)
    await btn.trigger("click")
    expect(wrapper.emitted()).toHaveProperty('toggleDarkmode')
  })

})