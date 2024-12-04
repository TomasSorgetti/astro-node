import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_CU7cmubB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B6TRCAbX.mjs';
import { l as loadTranslations } from '../../chunks/i18n_ZbFDSpMM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { locale } = Astro2.params;
  const translations = await loadTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "title": translations.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>${translations.about}</h1> <p>${translations.welcome}</p> </main> ` })}`;
}, "C:/Users/Tommy/Desktop/programacion/prueba-astro/src/public/src/pages/[locale]/about.astro", void 0);

const $$file = "C:/Users/Tommy/Desktop/programacion/prueba-astro/src/public/src/pages/[locale]/about.astro";
const $$url = "/[locale]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
