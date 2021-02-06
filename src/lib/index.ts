import LabyButton from './Button.vue'
import LabyCard from './Card.vue'
import LabyDialog from './Dialog.vue'
import LabySwitch from './Switch.vue'
import LabyTab from './Tab.vue'
import LabyTabs from './Tabs.vue'

export { LabyButton, LabyCard, LabyDialog, LabySwitch, LabyTab, LabyTabs, }
export { createDialog as createDialog } from './createDialog'

export default {
  install: Vue => {
    const components = [LabyButton, LabyCard, LabyDialog, LabySwitch, LabyTab, LabyTabs]
    components.forEach(item => {
      Vue.component(item.name, item)
    })
  }
}