import * as m from "@translations/messages";
import { availableLanguageTags, languageTag } from "@translations/runtime";
import "../globals.css";
import LanguageProvider from "@lib/i18n/language-provider";
import { LANG_NAMES } from "@lib/i18n/constants";
import Link from 'next/link';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = languageTag();
  return (
    <LanguageProvider>
      <html lang={lang} className="h-full">
        <body className="flex h-full w-full flex-col">
          <header className="p-4 flex flex-row gap-4 items-center">
						<h1 className="text-lg font-semibold">
            {LANG_NAMES[lang]}
						</h1>
						<nav className="flex flex-row gap-2">
							{availableLanguageTags.map(tag => (<Link href={tag} hrefLang={tag} key={lang} className="px-3 py-2 bg-slate-800 rounded-md">{m.go_to({lang: tag})}</Link>))}
						</nav>
          </header>
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}
