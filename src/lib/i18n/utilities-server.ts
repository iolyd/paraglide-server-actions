import { headers } from 'next/headers';
import { LANG_HEADER_NAME } from './constants';
import { isAvailableLanguageTag, sourceLanguageTag } from './generated/runtime';

export function getHeadersLang<H extends Headers>(headers: H) {
	const header = headers.get(LANG_HEADER_NAME);
	if (isAvailableLanguageTag(header)) {
		return header;
	}
}

export function languageTagServer() {
	const header = headers().get(LANG_HEADER_NAME);
	if (isAvailableLanguageTag(header)) {
		return header;
	}
	return sourceLanguageTag;
}