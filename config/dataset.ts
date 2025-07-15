export interface DocRoute {
  title?: string;
  href?: string;
  noLink?: true;
  items?: DocRoute[];
  file?: string;
}

const docRoutes: DocRoute[] = [
  {
    title: "student-scores",
    href: "/datasets/student-scores",
    file: "docs/datasets/student-scores.mdx",
  },
  {
    title: "programing-languages",
    href: "/datasets/programing-languages",
    file: "docs/datasets/programing-languages.mdx",
  },
  {
    title: "countries",
    href: "/datasets/countries",
    file: "docs/datasets/countries.mdx",
  },
  {
    title: "internet-companies",
    href: "/datasets/internet-companies",
    file: "docs/datasets/internet-companies.mdx",
  },

];

export default docRoutes;
