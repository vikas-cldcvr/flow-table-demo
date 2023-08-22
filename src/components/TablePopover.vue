<template>
  <f-popover
    id="target-popover"
    :open="store.openPoOver"
    :target="store.popoverTarget"
  >
    <f-div state="secondary" align="middle-center" padding="x-large">
      <f-text>This is opened on target element</f-text>
      <f-icon source="i-close" @click="() => store.close()" clickable></f-icon>
    </f-div>
  </f-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "./../store";

export default defineComponent({
  name: "TablePopover",
  data() {
    return {
      store,
    };
  },
});
</script>
