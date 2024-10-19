export type DocRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: DocRoute[];
};

const docRoutes: DocRoute[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Learn JSON",
    href: "/docs",
    items: [
      {
        title: "Getting Started",
        href: "/docs/getting-started",
      },
      {
        title: "Components",
        href: "/docs/components",
      },
    ]
  },
];

export default docRoutes;
