import * as m from '@translations/messages'

export default function Page() {
  return <article className="p-4">
		<h1 className="font-bold">
		{m.hello()}
		</h1>
		<form action="">
			<button dangerouslySetInnerHTML={{__html:m.call_form_action()}}></button>
		</form>
	</article>;
}
