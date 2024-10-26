export type DocRoute = {
  title?: string;
  href?: string;
  noLink?: true;
  items?: DocRoute[];
};

const docRoutes: DocRoute[] = [
  {
    title: "What Is JSON",
    href: "/docs/get-started/what-is-json",
  },
  {
    title: "Basic Syntax",
    href: "/docs/get-started/basic-syntax",
  },
  {
    title: 'Create JSON',
    href: '/docs/get-started/create-json'
  }, {
    title: 'JSON In web development',
    href: '/docs/get-started/json-in-web-development'
  }, {
    title: 'JSON Advance',
    href: '/docs/get-started/json-advance'
  }, {
    title: 'JSON vs xml',
    href: '/docs/get-started/json-vs-xml'
  }, {
    title: 'JSON SDK',
    href: '/docs/get-started/json-sdk'
  }
];

export default docRoutes;
