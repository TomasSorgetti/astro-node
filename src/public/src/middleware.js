export async function onRequest(context, next) {
  const url = new URL(context.request.url);

  const supportedLanguages = ["en", "es"];
  const defaultLanguage = "en";

  const pathParts = url.pathname.split("/");
  const locale = pathParts[1];

  const cookies = context.request.headers.get("cookie");
  const cookieLanguage = cookies
    ? cookies.split(";").find((c) => c.trim().startsWith("app-lang="))
    : null;
  const storedLanguage = cookieLanguage ? cookieLanguage.split("=")[1] : null;

  if (!supportedLanguages.includes(locale)) {
    const redirectLocale =
      storedLanguage && supportedLanguages.includes(storedLanguage)
        ? storedLanguage
        : defaultLanguage;

    if (!url.pathname.startsWith(`/${redirectLocale}`)) {
      const redirectUrl = new URL(url.pathname, context.request.url);
      redirectUrl.pathname = `/${redirectLocale}${url.pathname}`;

      return Response.redirect(redirectUrl.toString(), 301);
    }
  } else if (supportedLanguages.includes(locale) && locale !== storedLanguage) {
    const redirectUrl = new URL(url.pathname, context.request.url);

    redirectUrl.pathname = `/${storedLanguage}${url.pathname.slice(
      locale.length + 1
    )}`;

    return Response.redirect(redirectUrl.toString(), 301);
  }
  return next();
}
