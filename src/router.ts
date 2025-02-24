import { createRouter, createWebHistory } from "vue-router";
import ExploreView from "@/views/explore-view.vue";
import SearchView from "@/views/search-view.vue";
import SettingsView from "@/views/settings-view.vue";
import HistoryView from "@/views/history-view.vue";
import VotedView from "@/views/voted-view.vue";
import StationInfoView from "@/views/station-info-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ExploreView,
    },
    {
      path: "/search",
      component: SearchView,
    },
    {
      path: "/settings",
      component: SettingsView,
    },
    {
      path: "/history",
      component: HistoryView,
    },
    {
      path: "/voted",
      component: VotedView,
    },
    {
      path: "/s/:id",
      component: StationInfoView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;

