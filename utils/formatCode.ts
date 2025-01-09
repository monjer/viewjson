
import prettier from 'prettier';
import htmlPlugin from 'prettier/plugins/html';
import yamlPlugin from 'prettier/plugins/yaml';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';

const OptionsByLanguage = {
  json: {
    parser: "babel",
    plugins: [babelPlugin, estreePlugin],
    singleQuote: false,
    quoteProps: "preserve",
  },
  yaml: {
    parser: "yaml",
    plugins: [yamlPlugin],
  },
  xml: {
    parser: "xml",
    plugins: [htmlPlugin],
  },
  html: {
    parser: "html",
    plugins: [htmlPlugin],
  },
};

export default async function (code = '', language: string) {
  if (language === 'json') {
    return JSON.stringify(JSON.parse(code), null, 2);
  }
  return await prettier.format(code, OptionsByLanguage[language]);
};