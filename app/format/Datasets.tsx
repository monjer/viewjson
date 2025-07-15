import React from "react";

const datasets = [
  {
    title: "Student Scores",
    description: "A sample JSON dataset representing student scores across different subjects, with explanation and usage guide.",
    link: "/datasets/student-scores",
    datalink: '/datasets/student-scores.json',
    editorlink: '?url=https://viewjson.online/datasets/student-scores.json',
  },
  {
    title: "Programming Languages",
    description: "A sample JSON dataset representing various programming languages, including their design details, popularity, and usage domains.",
    link: "/datasets/programing-languages",
    datalink: '/datasets/programing-languages.json',
    editorlink: '?url=https://viewjson.online/datasets/programing-languages.json',
  },
  {
    title: "Internet Companies",
    description: "A sample JSON dataset containing information about major internet companies, including their founding year, headquarters, services, and more.",
    link: "/datasets/internet-companies",
    datalink: '/datasets/internet-companies.json',
    editorlink: '?url=https://viewjson.online/datasets/internet-companies.json',
  },
  {
    title: "Country Informations",
    description: "A sample JSON dataset containing geographic and location-related information for various countries, with usage guide and field descriptions.",
    link: "/datasets/countries",
    datalink: '/datasets/countries.json',
    editorlink: '?url=https://viewjson.online/datasets/countries.json',
  },
];

export default function Datasets() {
  return (
    <section className="">
      <div className="mb-8 mt-20">
        <h1 className="text-2xl font-bold  text-center">Available Datasets</h1>
        <p className="text-center">We provide some sample json datasets to help you get started. You can use all these data in your project to do some tests.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {datasets.map((ds) => (
          <div
            key={ds.title}
            className="border dark:border-gray-800 rounded shadow p-5 flex flex-col gap-2 dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <h3 className="!mt-0  !mb-0">{ds.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{ds.description}</p>
            <span className="flex  gap-3">

              <a
                href={ds.editorlink}
                target="_blank"
                title={`Open ${ds.title} json data in editor`}
                className="text-blue-600 hover:underline text-xs"
              >
                Open in editor
              </a>
              <a
                href={ds.link}
                target="_blank"
                title={`View ${ds.title} json data in detail`}
                className="text-blue-600 hover:underline text-xs"
              >
                Detail
              </a>
              <a
                href={ds.datalink}
                target="_blank"
                download
                className="text-blue-600 hover:underline text-xs"
                title={`Download ${ds.title} dataset`}
              >
                Download
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}