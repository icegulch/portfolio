import { minify } from "html-minifier-terser";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "/" });
  const byOrder = (a, b) => (a.data.order ?? 99) - (b.data.order ?? 99);
  const onSite = (p) => !p.data.external;

  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByTag("project").sort(byOrder));

  eleventyConfig.addCollection("samples", (api) =>   // includes external ones
    api.getFilteredByTag("sample").sort(byOrder));

  eleventyConfig.addCollection("work", (api) => [    // pager: on-site pages only
    ...api.getFilteredByTag("project").sort(byOrder),
    ...api.getFilteredByTag("sample").filter(onSite).sort(byOrder),
  ]);

  eleventyConfig.addTransform("htmlmin", async function (content) {
    const isHtml = (this.page.outputPath || "").endsWith(".html");
    const isBuild = process.env.ELEVENTY_RUN_MODE === "build";
    if (!isHtml || !isBuild) return content;

    return minify(content, {
      collapseWhitespace: true,
      conservativeCollapse: true,   // keep one space where whitespace mattered
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      useShortDoctype: true,
      decodeEntities: true,
    });
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    templateFormats: ["md", "liquid", "html"],
  };
}
