import router from "@/router";

export function openLink(link: string) {
  window.open(link, "_blank");
}

export function isUndefined<T>(obj: T) {
  if (obj === undefined) return true;
  else return false;
}

export function isBlankArray<T>(arr: T[]) {
  if (arr.length === 0) return true;
  else return false;
}

export function isEmptyString(text: string) {
  return text.trim().length === 0;
}

export function changeRoute(route: string) {
  router.push(route);
}
