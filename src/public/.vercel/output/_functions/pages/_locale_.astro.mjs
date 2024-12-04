import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CUgrqubk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_EN7A0H5B.mjs';
import { l as loadTranslations } from '../chunks/i18n_fX6N7U_C.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale } = Astro2.params;
  const translations = await loadTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "locale": locale, "title": translations.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>${translations.welcome}</h1> </main> ` })} `;
}, "C:/Users/Tommy/Desktop/programacion/astro-i18n/src/pages/[locale]/index.astro", void 0);

const $$file = "C:/Users/Tommy/Desktop/programacion/astro-i18n/src/pages/[locale]/index.astro";
const $$url = "/[locale]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
