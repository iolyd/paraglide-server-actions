"use client";

import getLanguageAction from "@lib/actions/get-language";
import { useFormState } from "react-dom";
import * as m from "@translations/messages";

export function LangForm() {
  const [formState, formAction] = useFormState(getLanguageAction, undefined);

  return (
    <form action={formAction}>
      <button
				className="p-4 bg-slate-200 text-slate-950 font-semibold rounded-md"
      >{m.call_form_action()}</button>
    </form>
  );
}
