import { defineNuxtConfig } from 'nuxt/config'
import XStateModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    XStateModule
  ],
  builder: 'vite',
  xState: {
    // minimal: false,
    // customMachines: {
    //   dir: 'machines',
    //   importSuffix: 'Machine'
    // }
  }
})
