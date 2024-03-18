import { Fragment } from 'react';
import { ClientLanguageProvider } from './language-provider-client';
import { languageTagServer } from './utilities-server';
import { languageTag, setLanguageTag } from './generated/runtime';

setLanguageTag(languageTagServer);

export default function LanguageProvider(props: { children: React.ReactNode }) {
	setLanguageTag(languageTagServer);
	return (
		<>
			<ClientLanguageProvider language={languageTag()} />
			<Fragment key={languageTag()}>{props.children}</Fragment>
		</>
	);
}
