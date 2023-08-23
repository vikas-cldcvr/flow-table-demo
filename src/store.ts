// store.js
import { reactive } from "vue";

export type AppStore = {
  openPoOver: boolean;
  popoverTarget: HTMLElement | undefined;
  open: (target?: HTMLElement) => void;
  close: () => void;
};
export const store = reactive<AppStore>({
  openPoOver: false,
  popoverTarget: undefined,
  open(target?: HTMLElement) {
    this.openPoOver = true;
    this.popoverTarget = target;
  },
  close() {
    this.openPoOver = false;
  },
});
