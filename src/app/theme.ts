import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  preflight: false, // Set to false to disable the CSS reset
});

export const system = createSystem(defaultConfig, customConfig);