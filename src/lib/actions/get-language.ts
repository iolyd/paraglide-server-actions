"use server";

import { languageTag } from "@lib/i18n/generated/runtime";

export default async function getLanguageAction() {
  console.log('Language inside server action: ' + languageTag());
}
