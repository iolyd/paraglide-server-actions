import i18nMiddleware from '@lib/i18n/middleware';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	return i18nMiddleware(request);
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
};
