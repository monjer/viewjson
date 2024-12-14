import React from "react";
import Content from './Content';

export default function Page() {
  return (
    <div className="mt-4">
      <Content />
      <h1 className="text-2xl">About viewjson.online</h1>
      <p>viewjson is an online json viewer, json beautifier, json formatter, json data converter, json diff, json validator</p>
    </div>
  );
}