import { markRaw } from 'vue'
import RRSlideshow from './rebelrobinson/Slideshow.vue'
import WooSlideshow from './watchourown/Slideshow.vue'
import HCISlideshow from './hciCollege/Slideshow.vue'

export default {
  list: [
    {
      component: markRaw(RRSlideshow),
      info: {
        title: 'Rebel Robinson Website',
        description: "Sarasota's Premier Boudoir Photographer",
        path: '/portfolio/rebelrobinson',
        image: '/images/rebelrobinson_project.png',
      },
    },
    {
      component: markRaw(WooSlideshow),
      info: {
        title: 'Watch Our Own',
        description: 'Health Utility SaaS Startup',
        path: '/portfolio/watchourown',
        image: '/images/woo_project.png',
      },
    },
    {
      component: markRaw(HCISlideshow),
      info: {
        title: 'HCI College',
        description: 'Custom Facebook App integration',
        path: '/portfolio/hcicollege',
        image: '/images/hci_project.png',
      },
    },
  ],
}
