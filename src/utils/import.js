import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/authLayout"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
}
