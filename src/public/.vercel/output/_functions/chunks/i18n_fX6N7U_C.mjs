const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

async function loadTranslations(locale) {
  try {
    return await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../locales/en.json": () => import('./en_CmwpxMBB.mjs'),"../locales/es.json": () => import('./es_Bchhka9l.mjs')})), `../locales/${locale}.json`, 3);
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
}

export { loadTranslations as l };
