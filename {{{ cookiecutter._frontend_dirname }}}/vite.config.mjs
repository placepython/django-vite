import { defineConfig } from "vite";
{{%- if cookiecutter.use_stimulus %}}
import StimulusHMR from 'vite-plugin-stimulus-hmr';{{% endif %}}

// Configuration entry point
export default defineConfig({
  plugins: [
    {{%- if cookiecutter.use_stimulus %}}
    StimulusHMR()
  {{% endif %}}],
  base: "/static/",
  build: {
    manifest: "manifest.json",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: "./src/index.js"
      }
    },
  },
});
