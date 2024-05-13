const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("responsiveImage", async (src, alt) => {
    let metadata = await Image(src, {
      widths: [120, 320, 375, 750, 768, 1024, 1242, 1280, 1440, 1920],
      formats: ["avif", "webp", "jpeg"],
      urlPath: "/images/",
      outputDir: "./_site/images/"
    });

    let imageAttributes = {
      alt,
      sizes: "(max-width: 768px) 100vw, 50vw",
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
};

