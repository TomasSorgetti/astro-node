import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CUgrqubk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_EN7A0H5B.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const locale = Astro2.params?.locale || "en";
  const translations = {
    en: { title: "Page Not Found", message: "Sorry, this page does not exist." },
    es: { title: "P\xE1gina No Encontrada", message: "Lo sentimos, esta p\xE1gina no existe." }
  };
  const { title, message } = translations[locale] || translations["en"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "locale": locale }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>${title}</h1> <p>${message}</p> </main> ` })}`;
}, "C:/Users/Tommy/Desktop/programacion/astro-i18n/src/pages/404.astro", void 0);

const $$file = "C:/Users/Tommy/Desktop/programacion/astro-i18n/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
