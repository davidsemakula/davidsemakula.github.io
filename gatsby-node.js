exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/safe-hyperlane-router',
    toPath: 'https://mukutu.davidsemakula.com',
  });
};
