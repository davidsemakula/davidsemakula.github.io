exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/presentation',
    toPath:
      'https://docs.google.com/presentation/d/1R8l-2Nf9wIPv9vuEEoMC1dHS8zBEFLjRrZtFvJoMaoo/edit?usp=sharing',
  });
};
