export type DocRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: DocRoute[];
};

const docRoutes: DocRoute[] = [
  {
    title: "Quick Start",
    href: "/docs",
    items: [
      {
        title: "What Is JSON",
        href: "/docs/get-started/what-is-json",
      },
      {
        title: "Basic Syntax",
        href: "/docs/get-started/basic-syntax",
      },
    ]
  },
];

export default docRoutes;
