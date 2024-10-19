import React from 'react'

export default function Page() {
  return (
    <div className='h-full'>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              ViewJson
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              ViewJson is a simple tool to view json,
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Format JSON
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Convert JSON
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
