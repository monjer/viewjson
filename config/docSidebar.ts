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
    title: "JSON Syntax And Structure",
    href: "/docs/basic-syntax",
    file: "docs/basic-syntax.mdx",
  },
  {
    title: "Common Syntax Error",
    href: "/docs/common-syntax-error",
    file: "docs/common-syntax-error.mdx",
  },
  {
    title: 'Creating And Parsing JSON',
    href: '/docs/create-json',
    file: 'docs/create-json.mdx',
  }, {
    title: 'JSON In Web Development',
    href: '/docs/json-in-web-development',
    file: 'docs/json-in-web-development.mdx',
  }, {
    title: 'Validate JSON',
    href: '/docs/validate-json',
    file: 'docs/validate-json.mdx',
  }, {
    title: 'What Is JSON5',
    href: '/docs/what-is-json5',
    file: 'docs/what-is-json5.mdx',
  }, {
    title: 'JSON Vs XML',
    href: '/docs/json-vs-xml',
    file: 'docs/json-vs-xml.mdx',
  }, {
    title: 'Introduction To JSONP',
    href: '/docs/jsonp',
    file: 'docs/jsonp.mdx',
  }, {
    title: 'Popular JSON Libraries',
    href: '/docs/json-sdk',
    file: 'docs/json-sdk.mdx',
  }, {
    title: 'JSON Advance',
    href: '/docs/json-advance',
    file: 'docs/json-advance.mdx',
  },
];

export default docRoutes;
