/*
 * Rehype plugin that adds `target="_blank"` properties to external links.
 *
 * */

import { URL } from 'node:url';

import { visit } from 'unist-util-visit';

const HOSTNAME = 'davidsemakula.com';
export default function rehypeExtLink() {
  return async (ast, _) => {
    visit(ast, 'element', (node, index, parent) => {
      if (node.tagName == 'a') {
        let url = new URL(node.properties.href, `https://${HOSTNAME}`);
        let isInternal = url.hostname === HOSTNAME || (!url.protocol && !url.hostname && (url.pathname || url.hash));
        if (!isInternal) {
          node.properties.target = '_blank';
        }
      }
    });
  };
}
