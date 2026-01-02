import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import react from '@vitejs/plugin-react'
import tanstackRouter from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        routesDirectory: './app/routes',
        generatedRouteTree: './app/routeTree.gen.ts',
      }),
      tailwindcss(),
      react(),
      nitro(),
    ],
});
