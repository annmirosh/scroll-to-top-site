
// scrollToTop: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './scrolltotop.core.js';
import { COMPONENTS } from './scrolltotop.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
