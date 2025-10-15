import { defineConfig } from "vite";
import path from "path";
{{%- if cookiecutter.use_tailwindcss %}}
import tailwindcss from "@tailwindcss/vite";{{% endif %}}

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const devHost = "localhost";
  const devPort = 5173;
  const devOrigin = isDev ? `http://${devHost}:${devPort}` : "";

  return {
    base: devOrigin + "/static/",

    plugins: [
      {{%- if cookiecutter.use_tailwindcss %}}
      tailwindcss(),
    {{% endif %}}],

    server: {
      host: devHost,
      port: devPort,
      strictPort: true,
      origin: devOrigin,
    },

    build: {
      manifest: true,
      outDir: "./dist/",
      emptyOutDir: true,
      rollupOptions: {
        main: "./src/main.js",
      },
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
