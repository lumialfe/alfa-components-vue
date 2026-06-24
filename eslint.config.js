// import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfigWithVueTs(
  // Global ignores for built/temporary assets
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/.storybook/**",
      "**/storybook-static/**",
      "**/build/**",
      "**/temp/**",
    ],
  },

  // // Base ESLint recommended rules for JavaScript
  // pluginJs.configs.recommended,

  // Vue recommended rules (Flat Config)
  ...pluginVue.configs["flat/recommended"],

  // TypeScript recommended rules (Flat Config) compatible with Vue
  ...vueTsConfigs.recommended,

  // Clean overrides and custom rules
  {
    rules: {
      // Disable the multi-word component name rule (common in modern modular Vue setups)
      "vue/multi-word-component-names": "off",

      // Warn on unused variables, ignoring variables starting with an underscore
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Warn on use of 'any', rather than erroring out
      "@typescript-eslint/no-explicit-any": "warn",

      // Allow empty interfaces or any other specific minor preferences
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  },

  eslintConfigPrettier,
);
