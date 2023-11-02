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

    


    return config;
  },
};
