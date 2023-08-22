<template>
  <f-table-schema
    :data="tableData"
    :highlightSelected="true"
    :highlightHover="true"
    :variant="'underlined'"
    :size="'medium'"
    :stickyHeader="true"
    :rowsPerPage="50"
    :sort-by="'firstName'"
    :sort-order="'desc'"
    :searchTerm="null"
    :search-scope="'firstName'"
    :show-search-bar="undefined"
    @next="handleNext"
    @toggle-row-details="toggleRowDetails"
    @row-input="onRowInput"
    @row-click="onRowClick"
    @header-selected="onHeaderSelect"
  >
  </f-table-schema>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getFakeUsers from "./mock-users-data";

export default defineComponent({
  name: "MyTable",
  data() {
    return {
      tableData: getFakeUsers(10),
      searchBar: false,
    };
  },
  methods: {
    handleNext(event: CustomEvent) {
      console.log("next event ", event);
    },
    toggleRowDetails(event: CustomEvent) {
      console.log("row details ", event);
    },
    onRowInput() {
      console.log("row input", event);
    },
    onHeaderSelect() {
      console.log("header select ", event);
    },
    onRowClick(e: CustomEvent) {
      e.detail.selected = !e.detail.selected;
      this.tableData = { ...this.tableData };
      console.log("row-click", e);
    },
  },
});
</script>
