"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";

const Test = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return <div>TEST PAGE</div>;
};

export default Test;
