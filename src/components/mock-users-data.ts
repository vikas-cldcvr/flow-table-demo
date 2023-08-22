import { faker } from "@faker-js/faker";
import { html } from "lit";
import type {
  FTableSchemaData,
  FTableSchemaDataRow,
  FTableSchemaHeaderCell,
} from "@cldcvr/flow-table";

import emailCellTemplate from "./email-cell-template";
import birthdateCellTemplate from "./birthdate-cell-template";
import { store } from "./../store";

export default function getFakeUsers(
  rowCount = 100,
  columnCount = 8
): FTableSchemaData {
  const users = [];

  for (let i = 0; i < rowCount; i++) {
    const userRow: FTableSchemaDataRow = {
      id: `r${i}`,
      state: i === 0 ? "danger" : "default",
      selected: i === 3,
      data: {
        firstName: { value: faker.person.firstName() },
        lastName: { value: faker.person.lastName() },

        birthDate: {
          value: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
          template: birthdateCellTemplate,
          toString: function () {
            return this.value.toString();
          },
        },
        email: {
          value: faker.internet.email(),
          template: emailCellTemplate,
          actions: [
            {
              icon: "i-chat",
              id: "chat",
              onClick(_event, element) {
                store.open(element);
              },
            },
            {
              icon: "i-mail",
              id: "meail",
            },
            {
              icon: "i-star",
              id: "star",
            },
          ],
        },
        mobile: {
          value: faker.phone.number(),
          template() {
            return html`<f-text state="success">${this.value}</f-text>`;
          },
        },
        sex: { value: faker.person.sex() },
        address: {
          value: `${faker.location.street()}, ${faker.location.city()}, ${faker.location.state()}, ${faker.location.zipCode()} ${faker.location.country()}`,
        },
      },
      details: function () {
        return html`<f-div padding="large"
          ><f-text state="danger">This is Details slot</f-text></f-div
        >`;
      },
    };
    users.push(userRow);
  }

  const header: Record<string, FTableSchemaHeaderCell> = {
    firstName: { value: "First name", sticky: true },
    lastName: { value: "Last name" },
    birthDate: { value: "Birth Date" },
    mobile: { value: "Mobile" },
    email: { value: "Email" },
    sex: { value: "Sex" },
    address: { value: "Address", width: "300px", selected: true },
  };

  return {
    header: Object.fromEntries(Object.entries(header).slice(0, columnCount)),
    rows: users,
  };
}
