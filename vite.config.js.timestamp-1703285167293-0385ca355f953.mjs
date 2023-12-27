// vite.config.js
import { defineConfig } from "file:///Users/marty/gitmllc/vite-poc/node_modules/vite/dist/node/index.js";
import Inspect from "file:///Users/marty/gitmllc/vite-poc/node_modules/vite-plugin-inspect/dist/index.mjs";

// src/vite-azoth-plugin.js
import { Parser } from "file:///Users/marty/gitmllc/vite-poc/node_modules/acorn/dist/acorn.mjs";

// src/parsers/acorn-azoth/index.js
import { Parser as AcornParser } from "file:///Users/marty/gitmllc/vite-poc/node_modules/acorn/dist/acorn.mjs";

// src/generator/index.js
import { GENERATOR, generate } from "file:///Users/marty/gitmllc/vite-poc/node_modules/astring/dist/astring.mjs";

// src/parsers/acorn-azoth/template-parser.js
import { Parser as HtmlParser } from "file:///Users/marty/gitmllc/vite-poc/node_modules/htmlparser2/lib/esm/index.js";

// src/generator/index.js
var { ArrowFunctionExpression } = GENERATOR;

// src/vite-azoth-plugin.js
import { SourceMapGenerator } from "file:///Users/marty/gitmllc/vite-poc/node_modules/source-map/source-map.js";
import { normalizePath } from "file:///Users/marty/gitmllc/vite-poc/node_modules/vite/dist/node/index.js";

// vite.config.js
var vite_config_default = defineConfig({
  test: {
    // update: true,
    testTimeout: 3e4
  },
  plugins: [
    // AzothPlugin(),
    Inspect()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3ZpdGUtYXpvdGgtcGx1Z2luLmpzIiwgInNyYy9wYXJzZXJzL2Fjb3JuLWF6b3RoL2luZGV4LmpzIiwgInNyYy9nZW5lcmF0b3IvaW5kZXguanMiLCAic3JjL3BhcnNlcnMvYWNvcm4tYXpvdGgvdGVtcGxhdGUtcGFyc2VyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21hcnR5L2dpdG1sbGMvdml0ZS1wb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYXJ0eS9naXRtbGxjL3ZpdGUtcG9jL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYXJ0eS9naXRtbGxjL3ZpdGUtcG9jL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0JztcbmltcG9ydCBBem90aFBsdWdpbiBmcm9tICcuL3NyYy92aXRlLWF6b3RoLXBsdWdpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgdGVzdDoge1xuICAgICAgICAvLyB1cGRhdGU6IHRydWUsXG4gICAgICAgIHRlc3RUaW1lb3V0OiAzMF8wMDAsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIC8vIEF6b3RoUGx1Z2luKCksXG4gICAgICAgIEluc3BlY3QoKSAgICAgICBcbiAgICBdLFxufSk7XG5cblxuXG5cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21hcnR5L2dpdG1sbGMvdml0ZS1wb2Mvc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFydHkvZ2l0bWxsYy92aXRlLXBvYy9zcmMvdml0ZS1hem90aC1wbHVnaW4uanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hcnR5L2dpdG1sbGMvdml0ZS1wb2Mvc3JjL3ZpdGUtYXpvdGgtcGx1Z2luLmpzXCI7aW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnYWNvcm4nO1xuaW1wb3J0IGFjb3JuQXpvdGhQbHVnaW4gZnJvbSAnLi9wYXJzZXJzL2Fjb3JuLWF6b3RoJztcbmltcG9ydCB7IGF6b3RoR2VuZXJhdGUgYXMgZ2VuZXJhdGUgfSBmcm9tICcuL2dlbmVyYXRvcic7XG5pbXBvcnQgeyBTb3VyY2VNYXBHZW5lcmF0b3IgfSBmcm9tICdzb3VyY2UtbWFwJztcbmltcG9ydCB7IG5vcm1hbGl6ZVBhdGggfSBmcm9tICd2aXRlJztcblxuY29uc3QganNGaWxlID0gL1xcLmpzJC87XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF6b3RoUGx1Z2luKCkge1xuXG4gICAgY29uc3QgQXpQYXJzZXIgPSBQYXJzZXIuZXh0ZW5kKGFjb3JuQXpvdGhQbHVnaW4oKSk7XG5cbiAgICBjb25zdCBwYXJzZSA9IGNvZGUgPT4gQXpQYXJzZXIucGFyc2UoY29kZSwge1xuICAgICAgICBlY21hVmVyc2lvbjogJ2xhdGVzdCcsXG4gICAgICAgIHNvdXJjZVR5cGU6ICdtb2R1bGUnLFxuICAgICAgICBsb2NhdGlvbnM6IHRydWUsXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgdHJhbnNwaWxlID0gKGlucHV0LCBzb3VyY2VNYXApID0+IHtcbiAgICAgICAgY29uc3QgYXN0ID0gcGFyc2UoaW5wdXQpO1xuICAgICAgICBjb25zdCBjb2RlID0gZ2VuZXJhdGUoYXN0LCB7IHNvdXJjZU1hcCB9KTtcbiAgICAgICAgcmV0dXJuIHsgY29kZSwgbWFwOiBzb3VyY2VNYXAgfTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIG5hbWU6ICdyb2xsdXAtYXpvdGgtcGx1Z2luJyxcbiAgICAgICAgZW5mb3JjZTogJ3ByZScsXG4gICAgICAgIHRyYW5zZm9ybShzb3VyY2UsIGlkKSB7XG4gICAgICAgICAgICBpZighanNGaWxlLnRlc3QoaWQpIHx8ICFpZC5pbmNsdWRlcygnc3JjL3d3dy8nKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gbm9ybWFsaXplUGF0aChpZCk7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VNYXAgPSBuZXcgU291cmNlTWFwR2VuZXJhdG9yKHsgXG4gICAgICAgICAgICAgICAgZmlsZTogcGF0aC5zcGxpdCgnLycpLmF0KC0xKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cmFuc3BpbGUoc291cmNlLCBzb3VyY2VNYXApO1xuICAgICAgICB9LFxuXG4gICAgfTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm07XG5cbiAgICAvLyAvLyBUT0RPOiBpbmxpbmUgdGVtcGxhdGVzIGludG8gaW5kZXguaHRtbFxuICAgIC8vIGNvbnN0IGluamVjdEh0bWwgPSB7XG4gICAgLy8gICAgIG5hbWU6ICdpbmplY3QtaHRtbC1wbHVnaW4nLFxuICAgIC8vICAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgLy8gICAgIHRyYW5zZm9ybUluZGV4SHRtbChodG1sKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKFxuICAgIC8vICAgICAgICAgICAgICc8IS0tIHRlbXBsYXRlcyAtLT4nLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IGA8bGk+JHtpdGVtfTwvbGk+YCkuam9pbignXFxuJylcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgIH0sXG5cbiAgICAvLyB9O1xuICAgIC8vIHJldHVybiBbdHJhbnNmb3JtLCBpbmplY3RIdG1sXTtcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9tYXJ0eS9naXRtbGxjL3ZpdGUtcG9jL3NyYy9wYXJzZXJzL2Fjb3JuLWF6b3RoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFydHkvZ2l0bWxsYy92aXRlLXBvYy9zcmMvcGFyc2Vycy9hY29ybi1hem90aC9pbmRleC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWFydHkvZ2l0bWxsYy92aXRlLXBvYy9zcmMvcGFyc2Vycy9hY29ybi1hem90aC9pbmRleC5qc1wiOy8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG4vLyBBY29ybiBzb3VyY2UgdXNlcyBpbnRlbnRpb25hbCBmYWxsdGhyb3VnaCBpbiBzd2l0Y2gvY2FzZVxuXG4vLyBXcml0aW5nIHRoaXMgcGx1Z2luIGxlYW5lZCBvbiB0aGUgYWNvcm4tanN4IGV4YW1wbGUuXG4vLyBQbHVnaW4gc3RydWN0dXJlIGFuZCBhY29ybiBleHRlbmRpbmcgcHJldHR5IG11Y2ggdGhlIHNhbWUuXG4vLyBIZWF2eSByZWZhY3RvcmluZyBvbiBjb2RlIHN0cnVjdHVyZSwgd2l0aGluIHRoZSBjb25zdHJhaW50c1xuLy8gb2YgYmVpbmcgYW4gYWNvcm4gcGFyc2VyIGV4dGVuc2lvbiBhbmQgZmF2b3Jpbmcgc29tZSBvZlxuLy8gaXQncyBleGlzdGluZyBzdHlsZSBhbmQgcGFyYWRpZ20uXG4vL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Fjb3JuanMvYWNvcm4tanN4L2Jsb2IvbWFpbi9pbmRleC5qc1xuXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICcuL3Rva2Vucyc7XG5pbXBvcnQgeyBQYXJzZXIgYXMgQWNvcm5QYXJzZXIgfSBmcm9tICdhY29ybic7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL3BhcnNlci5qcyc7XG5cbi8vIFRoZSBtYXAgdG8gYGFjb3JuLWF6YCB0b2tlbnMgZnJvbSBgYWNvcm5gIG5hbWVzcGFjZSBvYmplY3RzLlxuY29uc3QgcGFyc2VyTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gYXpQYXJzZXJGYWN0b3J5O1xuXG5mdW5jdGlvbiBhelBhcnNlckZhY3RvcnkoUGFyc2VyID0gQWNvcm5QYXJzZXIpIHtcbiAgICBjb25zdCBhY29ybiA9IFBhcnNlci5hY29ybjtcbiAgICBpZihwYXJzZXJNYXAuaGFzKGFjb3JuKSkgcmV0dXJuIHBhcnNlck1hcC5nZXQoYWNvcm4pO1xuICAgIFxuICAgIGNvbnN0IHRva2VucyA9IGNyZWF0ZShhY29ybik7XG4gICAgY29uc3QgQXpQYXJzZXIgPSBleHRlbmQoUGFyc2VyLCB0b2tlbnMpO1xuICAgIHBhcnNlck1hcC5zZXQoYWNvcm4sIEF6UGFyc2VyKTtcbiAgICByZXR1cm4gQXpQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucywgc3RhcnRQb3MpIHtcbiAgICByZXR1cm4gYXpQYXJzZXJGYWN0b3J5KCkucGFyc2UoaW5wdXQsIG9wdGlvbnMsIHN0YXJ0UG9zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplcihpbnB1dCwgb3B0aW9ucywgc3RhcnRQb3MpIHtcbiAgICByZXR1cm4gYXpQYXJzZXJGYWN0b3J5KCkudG9rZW5pemVyKGlucHV0LCBvcHRpb25zLCBzdGFydFBvcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShpbnB1dCwgb3B0aW9ucywgc3RhcnRQb3MpIHtcbiAgICByZXR1cm4gWy4uLnRva2VuaXplcihpbnB1dCwgb3B0aW9ucywgc3RhcnRQb3MpXTtcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9tYXJ0eS9naXRtbGxjL3ZpdGUtcG9jL3NyYy9nZW5lcmF0b3JcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYXJ0eS9naXRtbGxjL3ZpdGUtcG9jL3NyYy9nZW5lcmF0b3IvaW5kZXguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hcnR5L2dpdG1sbGMvdml0ZS1wb2Mvc3JjL2dlbmVyYXRvci9pbmRleC5qc1wiO2ltcG9ydCB7IEdFTkVSQVRPUiwgZ2VuZXJhdGUgfSBmcm9tICdhc3RyaW5nJztcbmltcG9ydCB7IGdldFBhcnNlciBhcyBwYXJzZVRlbXBsYXRlIH0gZnJvbSAnLi4vcGFyc2Vycy9hY29ybi1hem90aC90ZW1wbGF0ZS1wYXJzZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXpvdGhHZW5lcmF0ZShhc3QsIGNvbmZpZykge1xuICAgIGNvbnN0IHsgQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24gfSA9IEdFTkVSQVRPUjtcbiAgICBcbiAgICByZXR1cm4gZ2VuZXJhdGUoYXN0LCB7XG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgZ2VuZXJhdG9yOiB7XG4gICAgICAgICAgICAuLi5HRU5FUkFUT1IsXG4gICAgICAgICAgICBzdXBlckFycm93RnVuY3Rpb25FeHByZXNzaW9uOiBBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcbiAgICAgICAgICAgIC4uLmF6b3RoR2VuZXJhdG9yLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5jb25zdCB7IEFycm93RnVuY3Rpb25FeHByZXNzaW9uIH0gPSBHRU5FUkFUT1I7XG5cbmNvbnN0IGF6b3RoR2VuZXJhdG9yID0ge1xuICAgIEF6b3RoVGVtcGxhdGUobm9kZSwgc3RhdGUpIHtcbiAgICAgICAgbm9kZS5uYW1lID0gJ18nO1xuICAgICAgICBjb25zdCB7IGh0bWwgfSA9IHBhcnNlVGVtcGxhdGUobm9kZS50ZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0IHsgbGluZUVuZDogbEUsIC8qLCB3cml0ZUNvbW1lbnRzICovIH0gPSBzdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbmRlbnQgPSBzdGF0ZS5pbmRlbnQ7XG4gICAgICAgIGNvbnN0IGFkZEluZGVudCA9ICgpID0+ICgrK3N0YXRlLmluZGVudExldmVsLCBzZXRJbmRlbnQoKSk7XG4gICAgICAgIGNvbnN0IHNldEluZGVudCA9ICgpID0+IGluZGVudCA9IGluZGVudCA9IHN0YXRlLmluZGVudC5yZXBlYXQoc3RhdGUuaW5kZW50TGV2ZWwpO1xuICAgICAgICBjb25zdCByZW1vdmVJbmRlbnQgPSAoKSA9PiAoLS1zdGF0ZS5pbmRlbnRMZXZlbCwgc2V0SW5kZW50KCkpO1xuXG4gICAgICAgIHN0YXRlLndyaXRlKGAoKCkgPT4geyR7c3RhdGUubGluZUVuZH1gLCBub2RlKTtcbiAgICAgICAgYWRkSW5kZW50KCk7XG4gICAgICAgIFxuICAgICAgICAvLyByZW5kZXJlclxuICAgICAgICBzdGF0ZS53cml0ZShgJHtpbmRlbnR9Y29uc3QgX19yZW5kZXJlciA9IF9fbWFrZVJlbmRlcmVyKGAsIG5vZGUpO1xuICAgICAgICBzdGF0ZS53cml0ZShgXFxgYCwgbm9kZS50ZW1wbGF0ZSk7XG4gICAgICAgIC8vIFRPRE86IHNlZ21lbnQgaW50byB0ZW1wbGF0ZSBwYXJ0cyBmb3Igc291cmNlIG1hcFxuICAgICAgICBzdGF0ZS53cml0ZShgJHtodG1sfWApO1xuICAgICAgICBzdGF0ZS53cml0ZShgXFxgYCk7XG4gICAgICAgIHN0YXRlLndyaXRlKGApOyR7bEV9YCk7XG5cbiAgICAgICAgLy8gcmVuZGVyaW5nIGZ1bmN0aW9uXG4gICAgICAgIHN0YXRlLndyaXRlKGAke2luZGVudH1jb25zdCBmbiA9ICgpID0+IHske2xFfWAsIG5vZGUpO1xuICAgICAgICB7XG4gICAgICAgICAgICBhZGRJbmRlbnQoKTtcbiAgICAgICAgICAgIHN0YXRlLndyaXRlKGAke2luZGVudH1yZXR1cm4gX19yZW5kZXJlcigpLl9fcm9vdDske2xFfWAsIG5vZGUpO1xuICAgICAgICAgICAgcmVtb3ZlSW5kZW50KCk7XG4gICAgICAgIH0gICAgICAgXG4gICAgICAgIHN0YXRlLndyaXRlKGAke2luZGVudH19OyR7bEV9YCk7XG5cbiAgICAgICAgc3RhdGUud3JpdGUoYCR7aW5kZW50fXJldHVybiBmbjske2xFfWApO1xuXG4gICAgICAgIFxuICAgICAgICByZW1vdmVJbmRlbnQoKTtcbiAgICAgICAgc3RhdGUud3JpdGUoYH0pKClgKTtcbiAgICAgICAgXG4gICAgXG4gICAgfSxcblxuICAgIEF6b3RoQmluZGluZyhub2RlLCBzdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQXpvdGggQmluZGluZycsIG5vZGUuYmluZGVyKTtcbiAgICB9LFxuXG4gICAgQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24obm9kZSwgc3RhdGUpIHtcbiAgICAgICAgaWYobm9kZS5ib2R5Py50eXBlID09PSAnQXpvdGhUZW1wbGF0ZScpIHtcbiAgICAgICAgICAgIC8vIHdpbGwgb3B0aW1pemUuLi5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cGVyQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24obm9kZSwgc3RhdGUpO1xuICAgIH1cbiAgICAvLyBUT0RPOiB0aGVzZSBjYW4gYmUgb3B0aW1pemVkIGFzIHdlbGwgaW4gc29tZSBjYXNlc1xuICAgIC8vIEZ1bmN0aW9uRXhwcmVzc2lvblxuICAgIC8vIEZ1bmN0aW9uRGVjbGFyYXRpb25cbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9tYXJ0eS9naXRtbGxjL3ZpdGUtcG9jL3NyYy9wYXJzZXJzL2Fjb3JuLWF6b3RoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFydHkvZ2l0bWxsYy92aXRlLXBvYy9zcmMvcGFyc2Vycy9hY29ybi1hem90aC90ZW1wbGF0ZS1wYXJzZXIuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hcnR5L2dpdG1sbGMvdml0ZS1wb2Mvc3JjL3BhcnNlcnMvYWNvcm4tYXpvdGgvdGVtcGxhdGUtcGFyc2VyLmpzXCI7aW1wb3J0IHsgUGFyc2VyIGFzIEh0bWxQYXJzZXIgfSBmcm9tICdodG1scGFyc2VyMic7XG5pbXBvcnQgdm9pZEVsZW1lbnRzIGZyb20gJy4uLy4uL3V0aWxzL3ZvaWQtZWxlbWVudHMuanMnO1xuXG5jbGFzcyBFbGVtZW50Q29udGV4dCB7XG4gICAgZWwgPSBudWxsO1xuICAgIGluVGFnT3BlbiA9IHRydWU7XG4gICAgYXR0cmlidXRlcyA9IFtdO1xuICAgIGlzQm91bmQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5lbCA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjaGlsZHJlbkxlbmd0aDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNlcigpIHtcblxuICAgIFxuICAgIGNvbnN0IGNoaWxkTm9kZVJlcGxhY2VtZW50ID0gJzxjaGlsZC1ub2RlPjwvY2hpbGQtbm9kZT4nO1xuXG4gICAgLy8gZWxlbWVudCBjb250ZXh0XG4gICAgbGV0IGNvbnRleHQgPSBudWxsO1xuICAgIGNvbnN0IGNvbnRleHRTdGFjayA9IFtdO1xuICAgIGNvbnN0IHBlZWsgPSAoKSA9PiBjb250ZXh0U3RhY2suYXQoLTEpOyBcbiAgICBjb25zdCBwdXNoQ29udGV4dCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGN0eCA9IG5ldyBFbGVtZW50Q29udGV4dChuYW1lKTtcbiAgICAgICAgY29udGV4dFN0YWNrLnB1c2goY3R4KTtcbiAgICAgICAgY29udGV4dCA9IGN0eDsgXG4gICAgfTtcbiAgICBjb25zdCBwb3BDb250ZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb250ZXh0U3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0U3RhY2suYXQoLTEpO1xuICAgIH07XG4gICAgXG4gICAgLy8gYWRkIGEgcm9vdCBjb250ZXh0IGZvciBwYXJzaW5nIGVhc2VcbiAgICBwdXNoQ29udGV4dCgnPD4nKTtcblxuICAgIC8vIGh0bWwgYnVpbGRlciBmb3IgY3VycmVudCB0ZW1wbGF0ZSBlbGVtZW50XG4gICAgbGV0IGNodW5rcyA9IFtdO1xuICAgIGxldCBodG1sID0gW107XG4gICAgY29uc3QgcHVzaEh0bWxDaHVuayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2h1bmsgPSBodG1sO1xuICAgICAgICBodG1sID0gW107XG4gICAgICAgIGlmKGNodW5rLmxlbmd0aCkgY2h1bmtzLnB1c2goY2h1bmspO1xuICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlT3BlblRhZyA9ICgpID0+IHtcbiAgICAgICAgaWYoYXR0cmlidXRlKSBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblxuICAgICAgICBjb25zdCBjdXJFbCA9IHBlZWsoKTsgICAgICAgIFxuICAgICAgICBpZihjdXJFbC5pblRhZ09wZW4pIHtcbiAgICAgICAgICAgIGN1ckVsLmluVGFnT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgaHRtbC5wdXNoKCc+Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGF0dHJpYnV0ZSA9IG51bGw7XG4gICAgY29uc3QgYWRkQXR0cmlidXRlID0gKGF0dHIgPSBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgbGV0IHsgbmFtZSwgdmFsdWUgPSAnJywgcXVvdGUgPSAnJyB9ID0gYXR0cjtcbiAgICAgICAgaWYodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBjb250ZXh0LmF0dHJpYnV0ZXMucHVzaChgICR7bmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuYXR0cmlidXRlcy5wdXNoKGAgJHtuYW1lfT0ke3F1b3RlfSR7dmFsdWV9JHtxdW90ZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGF0dHIgPT09IGF0dHJpYnV0ZSkgYXR0cmlidXRlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlciA9IHtcbiAgICAgICAgb25vcGVudGFnbmFtZShuYW1lKSB7XG4gICAgICAgICAgICBjb250ZXh0LmVsLmNoaWxkcmVuTGVuZ3RoKys7IC8vIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICBwdXNoQ29udGV4dChuYW1lKTtcbiAgICAgICAgICAgIGh0bWwucHVzaChgPCR7bmFtZX1gKTtcbiAgICAgICAgICAgIGh0bWwucHVzaChjb250ZXh0LmF0dHJpYnV0ZXMpO1xuICAgICAgICB9LFxuICAgICAgICBvbmF0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgcXVvdGUpIHtcbiAgICAgICAgICAgIGlmKGF0dHJpYnV0ZSkgYWRkQXR0cmlidXRlKCk7XG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSB7IG5hbWUsIHZhbHVlLCBxdW90ZSB9O1xuICAgICAgICB9LFxuICAgICAgICBvbm9wZW50YWc6IGNsb3NlT3BlblRhZyxcbiAgICAgICAgb250ZXh0KHRleHQpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRleHQuZWwuY2hpbGRyZW5MZW5ndGgrKztcbiAgICAgICAgICAgIGh0bWwucHVzaCh0ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25jbG9zZXRhZyhuYW1lLCBpc0ltcGxpZWQpIHtcbiAgICAgICAgICAgIC8vIENsb3NlIHdpdGggZWl0aGVyID4sIC8+LCBvciA8L3RhZz5cbiAgICAgICAgICAgIGlmKGlzSW1wbGllZCAmJiAhdm9pZEVsZW1lbnRzLmhhcyhuYW1lKSkgaHRtbC5wdXNoKCcvJyk7IFxuICAgICAgICAgICAgaWYoIWlzSW1wbGllZCkgaHRtbC5wdXNoKGA8LyR7bmFtZX0+YCk7XG4gICAgICAgICAgICBwb3BDb250ZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uY29tbWVudChjb21tZW50KSB7XG4gICAgICAgICAgICBodG1sLnB1c2goYDwhLS0ke2NvbW1lbnR9LS0+YCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBIdG1sUGFyc2VyKGhhbmRsZXIsIHsgcmVjb2duaXplU2VsZkNsb3Npbmc6IHRydWUgfSk7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgY29uc3QgYmluZGluZ3MgPSBbXTtcbiAgICBjb25zdCB0YXJnZXRzID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZSxcbiAgICAgICAgZW5kKHRleHQpIHtcbiAgICAgICAgICAgIGlmKHRleHQpIHBhcnNlci53cml0ZSh0ZXh0KTtcbiAgICAgICAgICAgIHBhcnNlci5lbmQoKTtcbiAgICAgICAgICAgIHB1c2hIdG1sQ2h1bmsoKTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmluZGluZ3MsXG4gICAgICAgICAgICAgICAgcXVhc2lzOiBjaHVua3MubWFwKGNodW5rID0+IGNodW5rLmZsYXQoKS5qb2luKCcnKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gd3JpdGUodGV4dCkge1xuICAgICAgICAvLyBUT0RPOiBpZih0YWlsKVxuICAgICAgICBpZih0ZXh0KSBwYXJzZXIud3JpdGUodGV4dCk7XG4gICAgICAgIHB1c2hIdG1sQ2h1bmsoKTtcblxuICAgICAgICBjb25zdCB7IGVsIH0gPSBjb250ZXh0O1xuICAgICAgICAvLyBxdWVyeUluZGV4IGlzIHRoZSBpbmRleCBvZiBlbGVtZW50IGluIHF1ZXJ5U2VsZWN0b3JBbGwgYm91bmQgZWxzXG4gICAgICAgIGxldCBxdWVyeUluZGV4ID0gdGFyZ2V0cy5sYXN0SW5kZXhPZihlbCk7XG4gICAgICAgIGlmKHF1ZXJ5SW5kZXggPT09IC0xKSBxdWVyeUluZGV4ID0gKHRhcmdldHMucHVzaChlbCkgLSAxKTtcblxuICAgICAgICAvLyBlbCBvYmogcmVmIC0gY2hpbGRyZW5MZW5ndGggcHJvcGVydHkgd2lsbCBpbmNyZWFzZSBpZiBtb3JlIGFkZGVkXG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSB7IHF1ZXJ5SW5kZXgsIGVsZW1lbnQ6IGVsLCB9O1xuXG4gICAgICAgIGxldCB0cmltbWVkUXVvdGUgPSAnJztcblxuICAgICAgICBpZihjb250ZXh0LmluVGFnT3BlbikgeyAvKiBwcm9wZXJ0eSBiaW5kZXIgdmlhIGF0dHJpYnV0ZSAqL1xuICAgICAgICAgICAgLy8gQWRkIGFueSBwcmlvciBhdHRyaWJ1dGUgb2YgdGhpcyBlbGVtZW50IHRvIGh0bWxcbiAgICAgICAgICAgIC8vIChvbmx5IG1pc3Npbmcgb24gZmlyc3QgYXR0cmlidXRlKVxuICAgICAgICAgICAgaWYoYXR0cmlidXRlKSBhZGRBdHRyaWJ1dGUoKTtcblxuICAgICAgICAgICAgLy8gVGhpcyBmb3JjZXMgdGhlIHBhcnNlciB0byBjbG9zZSB0aGUgY3VycmVudFxuICAgICAgICAgICAgLy8gYm91bmQgYXR0cmlidXRlIGFzIGl0IHdhaXRzIGZvciBtb3JlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gdGhhbiBqdXN0IHRoZSBlcXVhbCBzaWduIDxlbCBhdHRyPXt2YWx9PlxuICAgICAgICAgICAgLy8gVE9ETzogdGVzdCB3aXRoIHF1b3RlZCBhdHRyIGJpbmRpbmdcbiAgICAgICAgICAgIGxldCBxdW90ZSA9IHRleHQuYXQoLTEpO1xuICAgICAgICAgICAgaWYocXVvdGUgIT09ICdcIicgfHwgcXVvdGUgIT09IFwiJ1wiKSBxdW90ZSA9ICdcIic7ICAgIFxuICAgICAgICAgICAgcGFyc2VyLndyaXRlKHRyaW1tZWRRdW90ZSA9IHF1b3RlKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZihhdHRyaWJ1dGUpIGJpbmRpbmcucHJvcGVydHkgPSBhdHRyaWJ1dGUubmFtZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2xlYXIgYXR0cmlidXRlIHNvIGl0IGRvZXMgTk9UIGdldCBwdXNoZWQgdG9cbiAgICAgICAgICAgIC8vIGh0bWwgKHdlIGFyZSBzZXR0aW5nIGFzIGFuIGVsZW1lbnQgcHJvcGVydHkpXG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvKiBjaGlsZCBub2RlICh0ZXh0IG9yIGJsb2NrKSAqL1xuICAgICAgICAgICAgLy8gY29weSBjdXJyZW50IHZhbHVlIGFzICp0aGlzKiBiaW5kaW5ncyBpbmRleFxuICAgICAgICAgICAgYmluZGluZy5jaGlsZEluZGV4ID0gZWwuY2hpbGRyZW5MZW5ndGg7XG4gICAgICAgICAgICBwYXJzZXIud3JpdGUoY2hpbGROb2RlUmVwbGFjZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWNvbnRleHQuaXNCb3VuZCkge1xuICAgICAgICAgICAgYWRkQXR0cmlidXRlKHsgbmFtZTogJ2RhdGEtYmluZCcgfSk7XG4gICAgICAgICAgICBjb250ZXh0LmlzQm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcGFyc2UoYXpOb2RlKSB7XG4vLyAgICAgY29uc3QgeyB0ZW1wbGF0ZSB9ID0gYXpOb2RlO1xuLy8gICAgIGNvbnN0IGNoaWxkTm9kZVJlcGxhY2VtZW50ID0gJzxjaGlsZC1ub2RlPjwvY2hpbGQtbm9kZT4nO1xuLy8gICAgIC8vIGVsZW1lbnQgY29udGV4dFxuLy8gICAgIGxldCBjb250ZXh0ID0gbnVsbDtcbi8vICAgICBjb25zdCBjb250ZXh0U3RhY2sgPSBbXTtcbi8vICAgICBjb25zdCBwZWVrID0gKCkgPT4gY29udGV4dFN0YWNrLmF0KC0xKTsgXG4vLyAgICAgY29uc3QgcHVzaENvbnRleHQgPSAobmFtZSkgPT4ge1xuLy8gICAgICAgICBjb25zdCBjdHggPSBuZXcgRWxlbWVudENvbnRleHQobmFtZSk7XG4vLyAgICAgICAgIGNvbnRleHRTdGFjay5wdXNoKGN0eCk7XG4vLyAgICAgICAgIGNvbnRleHQgPSBjdHg7IFxuLy8gICAgIH07XG4vLyAgICAgY29uc3QgcG9wQ29udGV4dCA9ICgpID0+IHtcbi8vICAgICAgICAgY29udGV4dFN0YWNrLnBvcCgpO1xuLy8gICAgICAgICBjb250ZXh0ID0gY29udGV4dFN0YWNrLmF0KC0xKTtcbi8vICAgICB9O1xuICAgIFxuLy8gICAgIC8vIGFkZCBhIHJvb3QgY29udGV4dCBmb3IgcGFyc2luZyBlYXNlXG4vLyAgICAgcHVzaENvbnRleHQoJzw+Jyk7XG5cbi8vICAgICAvLyBodG1sIGJ1aWxkZXIgZm9yIGN1cnJlbnQgdGVtcGxhdGUgZWxlbWVudFxuLy8gICAgIGxldCBjaHVua3MgPSBbXTtcbi8vICAgICBsZXQgaHRtbCA9IFtdO1xuLy8gICAgIGNvbnN0IHB1c2hIdG1sQ2h1bmsgPSAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGNodW5rID0gaHRtbDtcbi8vICAgICAgICAgaHRtbCA9IFtdO1xuLy8gICAgICAgICBpZihjaHVuay5sZW5ndGgpIGNodW5rcy5wdXNoKGNodW5rKTtcbi8vICAgICAgICAgcmV0dXJuIGNodW5rO1xuLy8gICAgIH07XG5cbi8vICAgICBjb25zdCBjbG9zZU9wZW5UYWcgPSAoKSA9PiB7XG4vLyAgICAgICAgIGlmKGF0dHJpYnV0ZSkgYWRkQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG5cbi8vICAgICAgICAgY29uc3QgY3VyRWwgPSBwZWVrKCk7ICAgICAgICBcbi8vICAgICAgICAgaWYoY3VyRWwuaW5UYWdPcGVuKSB7XG4vLyAgICAgICAgICAgICBjdXJFbC5pblRhZ09wZW4gPSBmYWxzZTtcbi8vICAgICAgICAgICAgIGh0bWwucHVzaCgnPicpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcblxuLy8gICAgIGxldCBhdHRyaWJ1dGUgPSBudWxsO1xuLy8gICAgIGNvbnN0IGFkZEF0dHJpYnV0ZSA9IChhdHRyID0gYXR0cmlidXRlKSA9PiB7XG4vLyAgICAgICAgIGxldCB7IG5hbWUsIHZhbHVlID0gJycsIHF1b3RlID0gJycgfSA9IGF0dHI7XG4vLyAgICAgICAgIGlmKHZhbHVlID09PSAnJykge1xuLy8gICAgICAgICAgICAgY29udGV4dC5hdHRyaWJ1dGVzLnB1c2goYCAke25hbWV9YCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICBjb250ZXh0LmF0dHJpYnV0ZXMucHVzaChgICR7bmFtZX09JHtxdW90ZX0ke3ZhbHVlfSR7cXVvdGV9YCk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBpZihhdHRyID09PSBhdHRyaWJ1dGUpIGF0dHJpYnV0ZSA9IG51bGw7XG4vLyAgICAgfTtcblxuLy8gICAgIGNvbnN0IGhhbmRsZXIgPSB7XG4vLyAgICAgICAgIG9ub3BlbnRhZ25hbWUobmFtZSkge1xuLy8gICAgICAgICAgICAgY29udGV4dC5lbC5jaGlsZHJlbkxlbmd0aCsrOyAvLyBwYXJlbnQgZWxlbWVudFxuLy8gICAgICAgICAgICAgcHVzaENvbnRleHQobmFtZSk7XG4vLyAgICAgICAgICAgICBodG1sLnB1c2goYDwke25hbWV9YCk7XG4vLyAgICAgICAgICAgICBodG1sLnB1c2goY29udGV4dC5hdHRyaWJ1dGVzKTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgb25hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIHF1b3RlKSB7XG4vLyAgICAgICAgICAgICBpZihhdHRyaWJ1dGUpIGFkZEF0dHJpYnV0ZSgpO1xuLy8gICAgICAgICAgICAgYXR0cmlidXRlID0geyBuYW1lLCB2YWx1ZSwgcXVvdGUgfTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgb25vcGVudGFnOiBjbG9zZU9wZW5UYWcsXG4vLyAgICAgICAgIG9udGV4dCh0ZXh0KSB7ICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICBjb250ZXh0LmVsLmNoaWxkcmVuTGVuZ3RoKys7XG4vLyAgICAgICAgICAgICBodG1sLnB1c2godGV4dCk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIG9uY2xvc2V0YWcobmFtZSwgaXNJbXBsaWVkKSB7XG4vLyAgICAgICAgICAgICAvLyBDbG9zZSB3aXRoIGVpdGhlciA+LCAvPiwgb3IgPC90YWc+XG4vLyAgICAgICAgICAgICBpZihpc0ltcGxpZWQgJiYgIXZvaWRFbGVtZW50cy5oYXMobmFtZSkpIGh0bWwucHVzaCgnLycpOyBcbi8vICAgICAgICAgICAgIGlmKCFpc0ltcGxpZWQpIGh0bWwucHVzaChgPC8ke25hbWV9PmApO1xuLy8gICAgICAgICAgICAgcG9wQ29udGV4dCgpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBvbmNvbW1lbnQoY29tbWVudCkge1xuLy8gICAgICAgICAgICAgaHRtbC5wdXNoKGA8IS0tJHtjb21tZW50fS0tPmApO1xuLy8gICAgICAgICB9LFxuLy8gICAgIH07XG5cbi8vICAgICB2YXIgcGFyc2VyID0gbmV3IEh0bWxQYXJzZXIoaGFuZGxlciwgeyByZWNvZ25pemVTZWxmQ2xvc2luZzogdHJ1ZSB9KTtcblxuXG4vLyAgICAgY29uc3QgeyBxdWFzaXMsIGV4cHJlc3Npb25zIH0gPSB0ZW1wbGF0ZTtcbi8vICAgICBjb25zdCB7IGxlbmd0aCB9ID0gZXhwcmVzc2lvbnMubGVuZ3RoO1xuLy8gICAgIGNvbnNvbGUubG9nKCcqKioqKipleHByIGxlbmd0aCcsIGxlbmd0aCk7XG4vLyAgICAgLy8gd2FsayB0aGUgYXN0IGFuZCBpdGVyYXRlIHRocm91Z2ggYnkgZXhwcmVzc2lvbiBhbmQgcXVhc2lcblxuLy8gICAgIGNvbnN0IHRhcmdldHMgPSBbXTtcbi8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgcXVhc2kgPSBxdWFzaXNbaV07XG4vLyAgICAgICAgIGxldCB0ZXh0ID0gcXVhc2kudmFsdWUucmF3OyAgICBcbi8vICAgICAgICAgaWYodGV4dCkgcGFyc2VyLndyaXRlKHRleHQpO1xuLy8gICAgICAgICBwdXNoSHRtbENodW5rKCk7XG5cbi8vICAgICAgICAgY29uc3QgeyBlbCB9ID0gY29udGV4dDtcblxuLy8gICAgICAgICBsZXQgcXVlcnlJbmRleCA9IHRhcmdldHMubGFzdEluZGV4T2YoZWwpO1xuLy8gICAgICAgICBpZihxdWVyeUluZGV4ID09PSAtMSkgcXVlcnlJbmRleCA9ICh0YXJnZXRzLnB1c2goZWwpIC0gMSk7XG4vLyAgICAgICAgIGNvbnN0IGJpbmRpbmcgPSB7XG4vLyAgICAgICAgICAgICBxdWVyeUluZGV4OiBxdWVyeUluZGV4LFxuLy8gICAgICAgICAgICAgLy8gb2JqIHJlZiBzbyBjaGlsZHJlbkxlbmd0aCBwcm9wZXJ0eSB3aWxsIGluY3JlYXNlIGlmIG1vcmUgYWRkZWRcbi8vICAgICAgICAgICAgIGVsZW1lbnQ6IGVsLFxuLy8gICAgICAgICB9O1xuXG4vLyAgICAgfVxuXG4vLyAgICAgbGV0IHF1YXNpID0gcXVhc2lzWzBdO1xuLy8gICAgIGxldCB0ZXh0ID0gcXVhc2kudmFsdWUucmF3OyAgICBcbi8vICAgICBpZih0ZXh0KSBwYXJzZXIud3JpdGUodGV4dCk7XG4vLyAgICAgcHVzaEh0bWxDaHVuaygpO1xuICAgIFxuLy8gICAgIGlmKHF1YXNpcy5sZW5ndGggPiAxKSB7XG4vLyAgICAgICAgIGlmKHRleHQpIHBhcnNlci53cml0ZSh0ZXh0KTtcbi8vICAgICAgICAgY29uc3QgYmluZGluZ3MgPSBbXTtcbi8vICAgICAgICAgY29uc3QgdGFyZ2V0cyA9IFtdO1xuLy8gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGJpbmRpbmcgPSBiaW5kaW5nc1tpXTtcbi8vICAgICAgICAgICAgIGNvbnN0IHsgZWwgfSA9IGNvbnRleHQ7XG5cbi8vICAgICAgICAgICAgIGxldCBxdWVyeUluZGV4ID0gdGFyZ2V0cy5sYXN0SW5kZXhPZihlbCk7XG4vLyAgICAgICAgICAgICBpZihxdWVyeUluZGV4ID09PSAtMSkgcXVlcnlJbmRleCA9ICh0YXJnZXRzLnB1c2goZWwpIC0gMSk7XG4vLyAgICAgICAgICAgICBiaW5kaW5nLnF1ZXJ5SW5kZXggPSBxdWVyeUluZGV4O1xuLy8gICAgICAgICAgICAgLy8gb2JqIHJlZiBzbyBjaGlsZHJlbkxlbmd0aCBwcm9wZXJ0eSB3aWxsIGluY3JlYXNlIGlmIG1vcmUgYWRkZWRcbi8vICAgICAgICAgICAgIGJpbmRpbmcuZWxlbWVudCA9IGVsO1xuICAgICAgICBcbi8vICAgICAgICAgICAgIGxldCB0cmltbWVkUXVvdGUgPSAnJztcblxuLy8gICAgICAgICAgICAgaWYoY29udGV4dC5pblRhZ09wZW4pIHsgLyogcHJvcGVydHkgYmluZGVyIHZpYSBhdHRyaWJ1dGUgKi9cbi8vICAgICAgICAgICAgICAgICAvLyBBZGQgYW55IHByaW9yIGF0dHJpYnV0ZSBvZiB0aGlzIGVsZW1lbnQgdG8gaHRtbFxuLy8gICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZSkgYWRkQXR0cmlidXRlKCk7XG5cbi8vICAgICAgICAgICAgICAgICAvLyBUaGlzIGZvcmNlcyB0aGUgcGFyc2VyIHRvIGNsb3NlIHRoZSBjdXJyZW50XG4vLyAgICAgICAgICAgICAgICAgLy8gYm91bmQgYXR0cmlidXRlIGFzIGl0IHdhaXRzIGZvciBtb3JlIGF0dHJpYnV0ZVxuLy8gICAgICAgICAgICAgICAgIC8vIHRoYW4ganVzdCB0aGUgZXF1YWwgc2lnbiA8ZWwgYXR0cj17dmFsfT5cbi8vICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0ZXN0IHdpdGggcXVvdGVkIGF0dHIgYmluZGluZ1xuLy8gICAgICAgICAgICAgICAgIGxldCBxdW90ZSA9IHRleHQuYXQoLTEpO1xuLy8gICAgICAgICAgICAgICAgIGlmKHF1b3RlICE9PSAnXCInIHx8IHF1b3RlICE9PSBcIidcIikgcXVvdGUgPSAnXCInOyAgICBcbi8vICAgICAgICAgICAgICAgICBwYXJzZXIud3JpdGUodHJpbW1lZFF1b3RlID0gcXVvdGUpO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgaWYoYXR0cmlidXRlKSBiaW5kaW5nLnByb3BlcnR5S2V5ID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgYXR0cmlidXRlIHNvIGl0IGRvZXMgTk9UIGdldCBwdXNoZWQgdG9cbi8vICAgICAgICAgICAgICAgICAvLyBodG1sICh3ZSBhcmUgc2V0dGluZyBhcyBhbiBlbGVtZW50IHByb3BlcnR5KVxuLy8gICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSA9IG51bGw7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBlbHNlIHsgLyogY2hpbGQgbm9kZSAodGV4dCBvciBibG9jaykgKi9cbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgIC8vIGNvcHkgY3VycmVudCB2YWx1ZSBhcyAqdGhpcyogYmluZGluZ3MgaW5kZXhcbi8vICAgICAgICAgICAgICAgICBiaW5kaW5nLmNoaWxkSW5kZXggPSBlbC5jaGlsZHJlbkxlbmd0aDtcbi8vICAgICAgICAgICAgICAgICBwYXJzZXIud3JpdGUoY2hpbGROb2RlUmVwbGFjZW1lbnQpO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBpZighY29udGV4dC5pc0JvdW5kKSB7XG4vLyAgICAgICAgICAgICAgICAgYWRkQXR0cmlidXRlKHsgbmFtZTogJ2RhdGEtYmluZCcgfSk7XG4vLyAgICAgICAgICAgICAgICAgY29udGV4dC5pc0JvdW5kID0gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgcHVzaEh0bWxDaHVuaygpO1xuXG4vLyAgICAgICAgICAgICAvLyBuZXh0IHRlbXBsYXRlIGVsZW1lbnRcbi8vICAgICAgICAgICAgIHF1YXNpID0gcXVhc2lzW2kgKyAxXTtcbi8vICAgICAgICAgICAgIHRleHQgPSBxdWFzaS52YWx1ZS5yYXc7XG4vLyAgICAgICAgICAgICBpZih0cmltbWVkUXVvdGUgJiYgdGV4dFswXSA9PT0gdHJpbW1lZFF1b3RlKSB7XG4vLyAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vIFRPRE86IFF1b3RlIG1hdGNoIHZhbGlkYXRpb24gZXJyb3JzXG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHBhcnNlci53cml0ZSh0ZXh0KTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbiAgICBcbi8vICAgICBwYXJzZXIuZW5kKCk7XG4vLyAgICAgcHVzaEh0bWxDaHVuaygpOyAvLyBkb24ndCBmb3JnZXQgdGhlIGxhc3QgY2h1bmshXG4gICAgXG4vLyAgICAgdGVtcGxhdGUucXVhc2lzID0gY2h1bmtzLm1hcChjaHVuayA9PiBjaHVuay5mbGF0KCkuam9pbignJykpO1xuXG4vLyAgICAgLy8gVEJEOlxuLy8gICAgIC8vIGF6Tm9kZS50YXJnZXRzID0gdGFyZ2V0cztcblxuLy8gICAgIHJldHVybiBhek5vZGU7XG4vLyB9Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5USxTQUFTLG9CQUFvQjtBQUN0UyxPQUFPLGFBQWE7OztBQ0Q2USxTQUFTLGNBQWM7OztBQ1l4VCxTQUFTLFVBQVUsbUJBQW1COzs7QUNaaVEsU0FBUyxXQUFXLGdCQUFnQjs7O0FDQWMsU0FBUyxVQUFVLGtCQUFrQjs7O0FEZ0I5WCxJQUFNLEVBQUUsd0JBQXdCLElBQUk7OztBRmJwQyxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHFCQUFxQjs7O0FEQTlCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQTtBQUFBLElBRUYsYUFBYTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQSxFQUNaO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K