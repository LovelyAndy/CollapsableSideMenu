import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Videos from "../views/Videos.vue"
import Annotator from "../views/Annotator.vue"
import Training from "../views/Training.vue"
import Inference from "../views/Inference.vue"
import WorkInsights from "../views/WorkInsights.vue"

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/videos",
    component: Videos
  },
  {
    path: "/annotator",
    component: Annotator
  },
  {
    path: "/training",
    component: Training
  },
  {
    path: "/inference",
    component: Inference
  },
  {
    path: "/work-insights",
    component: WorkInsights
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
