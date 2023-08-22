import { FTableSchemaCell } from "@cldcvr/flow-table";
import { html } from "lit";

export default function birthdateCellTemplate(this: FTableSchemaCell) {
  return html`<f-div gap="small" width="hug-content">
    <f-icon source="i-date-time"></f-icon>
    <f-text inline
      >${this.value.getDate()}-${this.value.getMonth()}-${this.value.getFullYear()}</f-text
    ></f-div
  >`;
}
