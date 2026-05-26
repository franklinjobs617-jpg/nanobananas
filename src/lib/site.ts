export const site = {
  name: "nanobananas",
  title: "007 First Light Guides, Walkthroughs, and Launch Hub",
  url: "https://nanobananas.me",
  description:
    "A compact 007 First Light guide hub with verified release facts, walkthroughs, screenshots, videos, and launch-ready pages.",
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
