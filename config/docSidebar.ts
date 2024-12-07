export interface DocRoute {
  title?: string;
  href?: string;
  noLink?: true;
  items?: DocRoute[];
  file?: string;
}

const docRoutes: DocRoute[] = [
  {
    title: "What Is JSON",
    href: "/docs/what-is-json",
    file: "docs/what-is-json.mdx",
  },
  {
    title: "JSON Syntax and Structure",
    href: "/docs/basic-syntax",
    file: "docs/basic-syntax.mdx",
  },
  {
    title: 'Creating and Parsing JSON',
    href: '/docs/create-json',
    file: 'docs/create-json.mdx',
  }, {
    title: 'JSON In web development',
    href: '/docs/json-in-web-development',
    file: 'docs/json-in-web-development.mdx',
  }, {
    title: 'Validate JSON',
    href: '/docs/validate-json',
    file: 'docs/validate-json.mdx',
  }, {
    title: 'JSON Advance',
    href: '/docs/json-advance',
    file: 'docs/json-advance.mdx',
  }, {
    title: 'JSON Vs XML',
    href: '/docs/json-vs-xml',
    file: 'docs/json-vs-xml.mdx',
  }, {
    title: 'Popular JSON Libraries',
    href: '/docs/json-sdk',
    file: 'docs/json-sdk.mdx',
  },
];

export default docRoutes;
