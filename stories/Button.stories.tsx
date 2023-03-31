import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";

import { Button } from "../components/button.component";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = (props: any) => {
  console.log(props);
  
  return <Button color="primary" {...props} />;
}

Playground.args = {
  label: "Click me!",
};

