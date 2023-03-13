exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/safe-hyperlane-router',
    toPath: 'https://safe.mukutu.tech',
  });
  createRedirect({
    fromPath: '/ink-analyzer/w3f/architecture-diagram',
    toPath:
      'https://docs.google.com/drawings/d/e/2PACX-1vRe7A3hKARyqpSJFDRgi2BqBClnRFziuTkEK9HnHqL9MZQy_uLiLycHBv8_8oYo1Mol28L-12qnFpPA/pub?w=960&h=720',
  });
};
