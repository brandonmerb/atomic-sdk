// config/vite.config.ts
import { defineConfig, splitVendorChunkPlugin } from "file:///C:/Users/Brandon/Dev/AtomicDesignProjects/Plum%20Revision/atomic-design-dev-template/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/Brandon/Dev/AtomicDesignProjects/Plum%20Revision/atomic-design-dev-template/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///C:/Users/Brandon/Dev/AtomicDesignProjects/Plum%20Revision/atomic-design-dev-template/node_modules/vite-plugin-dts/dist/index.mjs";
import swc from "file:///C:/Users/Brandon/Dev/AtomicDesignProjects/Plum%20Revision/atomic-design-dev-template/node_modules/unplugin-swc/dist/index.mjs";
var vite_config_default = defineConfig((config) => {
  let plugins = [
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    dts({
      rollupTypes: true
    }),
    swc.vite()
  ];
  return {
    plugins,
    build: {
      rollupOptions: {
        preserveEntrySignatures: "strict",
        input: {
          "authentication": "./src/authentication/index.ts",
          "dependency-injection": "./src/dependency-injection/index.ts",
          "logging": "./src/logging/index.ts"
        },
        output: {
          entryFileNames: "[name].js"
        },
        external: [
          /^@atomicdesign*/,
          /^node:*/,
          "reflect-metadata"
        ]
      }
    },
    clearScreen: true,
    esbuild: false
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiY29uZmlnL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQnJhbmRvblxcXFxEZXZcXFxcQXRvbWljRGVzaWduUHJvamVjdHNcXFxcUGx1bSBSZXZpc2lvblxcXFxhdG9taWMtZGVzaWduLWRldi10ZW1wbGF0ZVxcXFxsaWJzXFxcXEBhdG9taWNkZXNpZ25cXFxcYXRvbWljLXNka1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEJyYW5kb25cXFxcRGV2XFxcXEF0b21pY0Rlc2lnblByb2plY3RzXFxcXFBsdW0gUmV2aXNpb25cXFxcYXRvbWljLWRlc2lnbi1kZXYtdGVtcGxhdGVcXFxcbGlic1xcXFxAYXRvbWljZGVzaWduXFxcXGF0b21pYy1zZGtcXFxcY29uZmlnXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9CcmFuZG9uL0Rldi9BdG9taWNEZXNpZ25Qcm9qZWN0cy9QbHVtJTIwUmV2aXNpb24vYXRvbWljLWRlc2lnbi1kZXYtdGVtcGxhdGUvbGlicy9AYXRvbWljZGVzaWduL2F0b21pYy1zZGsvY29uZmlnL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luLCBsb2FkRW52LCBVc2VyQ29uZmlnLCBDb25maWdFbnYgfSBmcm9tICd2aXRlJ1xyXG5cclxuLy8gVFNDb25maWcgUGF0aHMgaXMgbW9zdGx5IGZvciBwYWNrYWdlIEF0b21pYyBTaW5ndWxhcml0eSwgc2luY2UgaXQgdXNlcyBtb2R1bGUgcGF0aHNcclxuLy8gd2hpY2ggY29uZnVzZSBWaXRlICYgU1dDIGR1cmluZyB0aGUgYnVpbGRcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcclxuXHJcbi8vIFRoaXMgaXMgdG8gZ2VuZXJhdGUgdHlwZXMsIHNpbmNlIFNXQyBkb2VzIG5vdCBkbyB0aGlzXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbi8vIFNXQyBmb3Igdml0ZSB0byBhY3R1YWxseSBoYW5kbGUgdGhlIHJlbmRlcmluZ1xyXG5pbXBvcnQgc3djIGZyb20gJ3VucGx1Z2luLXN3YydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoY29uZmlnOiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcclxuICBsZXQgcGx1Z2lucyA9IFtcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxyXG4gICAgfSksXHJcbiAgICBzd2Mudml0ZSgpXHJcbiAgXVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogcGx1Z2lucyxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBwcmVzZXJ2ZUVudHJ5U2lnbmF0dXJlczogJ3N0cmljdCcsXHJcbiAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgIFwiYXV0aGVudGljYXRpb25cIjogXCIuL3NyYy9hdXRoZW50aWNhdGlvbi9pbmRleC50c1wiLFxyXG4gICAgICAgICAgXCJkZXBlbmRlbmN5LWluamVjdGlvblwiOiBcIi4vc3JjL2RlcGVuZGVuY3ktaW5qZWN0aW9uL2luZGV4LnRzXCIsXHJcbiAgICAgICAgICBcImxvZ2dpbmdcIjogXCIuL3NyYy9sb2dnaW5nL2luZGV4LnRzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICAgIC9eQGF0b21pY2Rlc2lnbiovLFxyXG4gICAgICAgICAgL15ub2RlOiovLFxyXG4gICAgICAgICAgXCJyZWZsZWN0LW1ldGFkYXRhXCJcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2xlYXJTY3JlZW46IHRydWUsXHJcbiAgICBlc2J1aWxkOiBmYWxzZSxcclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEraUIsU0FBUyxjQUFjLDhCQUE4RDtBQUlwb0IsT0FBTyxtQkFBbUI7QUFHMUIsT0FBTyxTQUFTO0FBR2hCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxXQUFrQztBQUM3RCxNQUFJLFVBQVU7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLHVCQUF1QjtBQUFBLElBQ3ZCLElBQUk7QUFBQSxNQUNGLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELElBQUksS0FBSztBQUFBLEVBQ1g7QUFFQSxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IseUJBQXlCO0FBQUEsUUFDekIsT0FBTztBQUFBLFVBQ0wsa0JBQWtCO0FBQUEsVUFDbEIsd0JBQXdCO0FBQUEsVUFDeEIsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsRUFDWDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
