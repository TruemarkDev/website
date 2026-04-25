import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

const kebabize = (str) => {
  return str
    .split(' ')
    .map((letter) => letter.toLowerCase())
    .join('-');
};

const remarkHeadingsPlugin = function remarkHeadingsPlugin() {
  return async function transformer(tree, file) {
    let headings = [];

    visit(tree, `heading`, (heading) => {
      const headingString = toString(heading);

      headings.push({
        id: kebabize(headingString.replace('?', '')),
        value: headingString,
        depth: heading.depth,
      });
    });

    const mdxFile = file;
    if (!mdxFile.data.meta) {
      mdxFile.data.meta = {};
    }

    mdxFile.data.meta.headings = headings;
  };
};

export default remarkHeadingsPlugin;
