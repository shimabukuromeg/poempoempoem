import React from "react";
import { Footer } from "../src/components/Footer";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
} from "@storybook/addon-knobs";

export default {
  title: "Footer",
  component: Footer,
  decorators: [withKnobs],
};

export const aaa = () => (
  <Footer accountId={text("ユーザーID", "ユーザーABC")}></Footer>
);
