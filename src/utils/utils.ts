export function openLink(link: string) {
  window.open(link, "_blank");
}

export function isBlankArray<T>(arr: T[]) {
  if (arr.length === 0) return true;
  else return false;
}

export function isEmptyString(text: string) {
  return text.trim().length === 0;
}
