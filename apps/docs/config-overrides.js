const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: (config) => {
    config.output.publicPath = "http://localhost:7001/";
    config.output.library = {
      type: "umd",
      name: "docs",
    };

    const htmlWebpackPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name == "HtmlWebpackPlugin"
    );
    if (htmlWebpackPlugin) {
      htmlWebpackPlugin.userOptions.scriptLoading = "blocking";
      htmlWebpackPlugin.userOptions.inject = "head";
    }

    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== "MiniCssExtractPlugin"
    );

    config.module.rules.forEach((rule) => {
      rule?.oneOf?.forEach((oneOfRule) => {
        const _loader = oneOfRule?.use?.find(
          (loader) =>
            loader === require.resolve("style-loader") ||
            loader.loader === MiniCssExtractPlugin.loader
        );

        if (_loader) {
          oneOfRule.use = oneOfRule.use.map((loader) =>
            loader.loader === MiniCssExtractPlugin.loader ||
            loader === require.resolve("style-loader")
              ? require.resolve("to-string-loader")
              : loader
          );
        }
      });
    });

    return config;
  },
};
