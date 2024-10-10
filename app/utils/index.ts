/**
 * Attach outside click listener
 * @param elements The inside elements
 * @param onOutsideClick Called on outside click
 */
export const outsideClick = (
  elements: HTMLElement | HTMLElement[],
  onOutsideClick: (evt: MouseEvent) => any
) => {
  if (typeof window == 'undefined') return () => { };

  let elementsArray = Array.isArray(elements) ? elements : [elements];

  let handler = (evt: MouseEvent) => {
    let targetElement = evt.target as HTMLElement;
    if (elementsArray.every(element => {
      return !element?.contains(targetElement) && targetElement !== element
    })) {
      onOutsideClick(evt);
    }
  };
  document?.addEventListener('click', handler);
  return () => document?.removeEventListener('click', handler);
};


