import type { DefaultLayout } from "@/types/components";
import { changeRoute, isUndefined } from "@/utils/utils";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigationStore = defineStore("navigationStore", () => {
  const isFixed = ref<boolean>(true);
  const rail = ref<boolean>(true);
  const currentLayout = ref<DefaultLayout>({
    header: { title: "Dashboard", icon: "mdi-view-dashboard" },
    scrollable: false,
  });

  function handleRoute(
    route: string,
    layout: DefaultLayout,
    newRail?: boolean
  ) {
    changeRoute(route);
    _setLayout(layout);

    toggleSideBar(newRail);
  }
  function toggleSideBar(newRail?: boolean) {
    if (isUndefined(newRail)) {
      rail.value = !rail.value;
    } else {
      rail.value = newRail!;
    }
  }
  function _setLayout(layout: DefaultLayout) {
    currentLayout.value = layout;
  }

  return { handleRoute, toggleSideBar, isFixed, rail, currentLayout };
});
