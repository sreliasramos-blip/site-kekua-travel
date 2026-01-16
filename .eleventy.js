module.exports = function(eleventyConfig) {

    // Passar ficheiros estáticos para a pasta final (_site)
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("sitemap.xml");

    // Retorna a configuração para que o Eleventy a possa usar
    return {
        // Estrutura de pastas
        dir: {
            input: ".",       // Ficheiros de entrada (onde está o index.html)
            includes: "_includes", // Para templates reutilizáveis
            output: "_site"      // Pasta de saída (o que será publicado)
        },
        // Permite que HTML seja tratado como um template
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};