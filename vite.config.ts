// vitest.config.ts
import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    globals: true, // This makes describe, it, expect available without imports
    environment: 'jsdom',
  },
})