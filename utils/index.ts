
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { xml } from "@codemirror/lang-xml";
import { yaml } from "@codemirror/lang-yaml";

/**
 * Attach outside click listener
 * @param elements The inside elements
 * @param onOutsideClick Called on outside click
 */
export const outsideClick = (
  elements: HTMLElement | HTMLElement[],
  onOutsideClick: (evt: MouseEvent) => void,
) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  if (typeof window == 'undefined') return () => { };

  const elementsArray = Array.isArray(elements) ? elements : [elements];

  const handler = (evt: MouseEvent) => {
    const targetElement = evt.target as HTMLElement;
    if (elementsArray.every(element => {
      return !element?.contains(targetElement) && targetElement !== element;
    })) {
      onOutsideClick(evt);
    }
  };
  document?.addEventListener('click', handler);
  return () => document?.removeEventListener('click', handler);
};

export const readFileAsText = async (file): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

export const getLanguage = (type: string) => {
  return {
    json: json(),
    xml: xml(),
    yaml: yaml(),
    html: html(),
  }[type];
};