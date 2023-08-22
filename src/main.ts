import { createApp } from "vue";
import App from "./App.vue";
import "@cldcvr/flow-core/dist/types/vue3";
import "@cldcvr/flow-table/dist/types/vue3";

Promise.all([
  import("@cldcvr/flow-core"),
  import("@cldcvr/flow-system-icon"),
  import("@cldcvr/flow-table"),
  import("@cldcvr/flow-table/dist/style.css"),
  import("@cldcvr/flow-core/dist/style.css"),
]).then(() => {
  createApp(App).mount("#app");
});
