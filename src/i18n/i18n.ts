import { createI18n } from "vue-i18n";

import de from "./de";
import en from "./en";
import type { MessageSchema } from "./schema";

const i18n = createI18n<[MessageSchema], "en" | "de">({
  locale: "de",
  fallbackLocale: "en",
  messages: {
    en: en,
    de: de,
  },
});

export default i18n;
