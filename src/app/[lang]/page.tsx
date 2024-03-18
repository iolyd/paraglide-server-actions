import getLanguageAction from "@lib/actions/get-language";
import * as m from "@translations/messages";
import { useFormState } from "react-dom";
import { LangForm } from "./client";

export default function Page() {
  return (
    <article className="p-4">
      <h1 className="font-bold">{m.hello()}</h1>
      <LangForm />
    </article>
  );
}
