import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { LANG_HEADER_NAME } from './constants';
import { isAvailableLanguageTag, setLanguageTag, sourceLanguageTag } from './generated/runtime';
import { getPathnameLang } from './utilities';
import { headers } from 'next/headers';
import { getHeadersLang, languageTagServer } from './utilities-server';

function middleware(request: NextRequest) {
	const pathnameLang = getPathnameLang(request.nextUrl.pathname);
	const headersLang = getHeadersLang(request.headers);
	const lang = pathnameLang ?? headersLang ?? sourceLanguageTag;
	const headers = new Headers(request.headers);
	headers.set(LANG_HEADER_NAME, lang);
	setLanguageTag(languageTagServer);
	if (!pathnameLang) {
		const withLang = `/${lang}${request.url.replace(request.nextUrl.origin + '/', '')}`
		console.log(withLang)
		return NextResponse.rewrite(new URL(withLang, request.nextUrl.origin), { request: { headers } });
	}
	return NextResponse.next({ request: { headers } });
}

export default middleware;
