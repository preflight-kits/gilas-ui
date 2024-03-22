import { resolve } from "path";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "gilas-ui",

            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
        },
    },
    plugins: [vanillaExtractPlugin()]
});