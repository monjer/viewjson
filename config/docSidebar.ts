export type DocRoute = {
  title?: string;
  href?: string;
  noLink?: true;
  items?: DocRoute[];
};

const docRoutes: DocRoute[] = [
  {
    title: "What Is JSON",
    href: "/docs/what-is-json",
  },
  {
    title: "JSON Syntax and Structure",
    href: "/docs/basic-syntax",
  },
  {
    title: 'Creating and Parsing JSON',
    href: '/docs/create-json'
  }, {
    title: 'JSON In web development',
    href: '/docs/json-in-web-development'
  }, {
    title: 'Validate JSON',
    href: '/docs/validate-json'
  }, {
    title: 'JSON Advance',
    href: '/docs/json-advance'
  }, {
    title: 'JSON Vs XML',
    href: '/docs/json-vs-xml'
  }, {
    title: 'Popular JSON Libraries',
    href: '/docs/json-sdk'
  }
];

export default docRoutes;
