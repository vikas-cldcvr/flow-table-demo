<template>
  <f-div state="default" height="100vh" width="100vw">
    <MyTable></MyTable>
    <TablePopover></TablePopover>
  </f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyTable from "./components/MyTable.vue";
import TablePopover from "./components/TablePopover.vue";

export default defineComponent({
  name: "App",

  components: {
    MyTable,
    TablePopover,
  },
});
</script>
