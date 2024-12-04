import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_CUgrqubk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_EN7A0H5B.mjs';
import { l as loadTranslations } from '../../chunks/i18n_fX6N7U_C.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { locale } = Astro2.params;
  const translations = await loadTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "title": translations.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>${translations.about}</h1> <p>${translations.welcome}</p> </main> ` })}`;
}, "C:/Users/Tommy/Desktop/programacion/astro-i18n/src/pages/[locale]/about.astro", void 0);

const $$file = "C:/Users/Tommy/Desktop/programacion/astro-i18n/src/pages/[locale]/about.astro";
const $$url = "/[locale]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
