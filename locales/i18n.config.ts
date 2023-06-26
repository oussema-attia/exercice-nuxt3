import localeEN from "./en.json";
import localeFR from "./fr.json";

export default defineI18nConfig(() => ({
    fallbackLocale: "en",
    messages: {
        en: localeEN,
        fr: localeFR
    }
  }))