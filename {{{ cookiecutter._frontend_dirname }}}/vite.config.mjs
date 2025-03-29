import { defineConfig } from "vite";
{{%- if cookiecutter.use_stimulus %}}
import StimulusHMR from 'vite-plugin-stimulus-hmr';{{% endif %}}
{{%- if cookiecutter.use_tailwindcss %}}
import tailwindcss from "@tailwindcss/vite";{{% endif %}}

// Configuration entry point
export default defineConfig({
  plugins: [
    {{%- if cookiecutter.use_stimulus %}}
    StimulusHMR(),{{% endif %}}
    {{%- if cookiecutter.use_tailwindcss %}}
    tailwindcss(),
  {{% endif %}}],
  base: "/static/",
  build: {
    manifest: "manifest.json",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: "./src/main.js"
      }
    },
  },
});
