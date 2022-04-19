exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.zip/,
          use: [loaders.file()],
        },
      ],
    },
  });
};
