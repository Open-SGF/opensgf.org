const fs = require('fs');
const path = require('path');
const htmlMinify = require('html-minifier');

const manifest = loadManifest();

module.exports = (config) => {
    config.addPassthroughCopy({ 'src/static': './' });
    config.setBrowserSyncConfig({
        files: ['dist/**/*'],
        open: true,
        // Tweak for Turbolinks & Browserstack Compatibility
        snippetOptions: {
            rule: {
                match: /<\/head>/i,
                fn: function (snippet, match) {
                    return snippet + match;
                },
            },
        },
    });
    config.setDataDeepMerge(true);

    // Looks up an asset in the Webpack manifest and returns it's
    // true filename including it's hash.
    config.addShortcode('asset', function (assetName) {
        if (!manifest) {
            return assetName;
        }

        const foundAsset = manifest[assetName];

        return foundAsset ? foundAsset : assetName;
    });

    config.addTransform('html-minify', function (content, outputPath) {
        if (process.env.NODE_ENV === 'production' && outputPath.endsWith('.html')) {
            return htmlMinify.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
        }

        return content;
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};

// Loads Webpack's manifest file into memory. Returns null if it doesn't exist
function loadManifest() {
    const manifestPath = path.resolve(__dirname, 'dist', 'assets', 'manifest.json');
    let manifestFile;
    try {
        manifestFile = fs.readFileSync(manifestPath, { encoding: 'utf8' });
    } catch (err) {
    }

    if (manifestFile) {
        return JSON.parse(manifestFile);
    }

    return null;
}
