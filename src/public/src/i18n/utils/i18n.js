export async function loadTranslations(locale) {
  try {
    return await import(`../locales/${locale}.json`);
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
}
