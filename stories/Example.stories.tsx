import React from "react";
import { Chip } from "@mui/material";
import { ChipProps } from "@mui/material";

interface OlaProps extends ChipProps {}

export const Ola = (props: ChipProps) => {
  // Super strange, we got onDelete here
  console.log(props);
  
  return <Chip color="primary" {...props} />;
};

export default {
  title: "Example/LiveChip",
  component: Ola,
  argTypes: {
    label: {
      defaultValue: "Live",
    },
    size: {
      defaultValue: "medium",
    },
  },
};

