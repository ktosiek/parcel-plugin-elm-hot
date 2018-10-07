module.exports = function (bundler) {
    bundler.addAssetType('elm', require.resolve('./ElmHotAsset'));
};
