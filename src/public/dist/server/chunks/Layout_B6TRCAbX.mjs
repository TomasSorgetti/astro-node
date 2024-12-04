import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, h as createAstro, j as renderHead, k as renderSlot } from './astro/server_CU7cmubB.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ChangeLanguage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div> <button id="change-lang-en" data-lang="en">English</button> <button id="change-lang-es" data-lang="es">Espa\xF1ol</button> </div> <script>\n  document.querySelectorAll("[id^=\'change-lang\']").forEach((button) => {\n    button.addEventListener("click", (event) => {\n      const selectedLanguage = event.target.dataset.lang;\n\n      document.cookie = `app-lang=${selectedLanguage}; path=/; max-age=31536000`;\n\n      const currentPath = window.location.pathname.split("/").slice(2).join("/");\n      window.location.href = `/${selectedLanguage}/${currentPath}`;\n    });\n  });\n<\/script>'], ["", '<div> <button id="change-lang-en" data-lang="en">English</button> <button id="change-lang-es" data-lang="es">Espa\xF1ol</button> </div> <script>\n  document.querySelectorAll("[id^=\'change-lang\']").forEach((button) => {\n    button.addEventListener("click", (event) => {\n      const selectedLanguage = event.target.dataset.lang;\n\n      document.cookie = \\`app-lang=\\${selectedLanguage}; path=/; max-age=31536000\\`;\n\n      const currentPath = window.location.pathname.split("/").slice(2).join("/");\n      window.location.href = \\`/\\${selectedLanguage}/\\${currentPath}\\`;\n    });\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Tommy/Desktop/programacion/prueba-astro/src/public/src/components/ChangeLanguage.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { locale } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<nav> <ul> <li><a${addAttribute(`/${locale}/`, "href")}>Home</a></li> <li><a${addAttribute(`/${locale}/about`, "href")}>About</a></li> <li> ${renderComponent($$result, "ChangeLanguage", $$ChangeLanguage, {})} </li> </ul> </nav>`;
}, "C:/Users/Tommy/Desktop/programacion/prueba-astro/src/public/src/components/navbar/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { locale, title } = Astro2.props;
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} ${locale}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Tommy/Desktop/programacion/prueba-astro/src/public/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
