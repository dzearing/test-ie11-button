import { Stylesheet, InjectionMode } from "@uifabric/merge-styles";

export const initializeMergeStyles = () => {
  Stylesheet.getInstance().setConfig({
    injectionMode: InjectionMode.appendChild
  });
};
