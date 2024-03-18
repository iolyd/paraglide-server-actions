import { AvailableLanguageTag, isAvailableLanguageTag } from './generated/runtime';

export function getPathnameLang<U extends string>(url: `/${AvailableLanguageTag}${U}` | U) {
	const [_, maybeLang] = url.split('/');
	if (isAvailableLanguageTag(maybeLang)) {
		return maybeLang;
	}
}