import { defineConfig } from 'vite';


export default defineConfig({
    test: {
        environment: 'happy-dom',
        update: false,
        timeout: 30_000,
        // browser: {
        //     provider: 'webdriverio',
        //     enabled: true,
        //     headless: true,
        //     // name: 'chromium',
        //     name: 'chrome',
        // }
    }
});