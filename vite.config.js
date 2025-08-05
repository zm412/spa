import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    plugins: [react(), cssInjectedByJsPlugin()],
    server: {
        hmr: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    base: "/spa_static/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
    },
});
