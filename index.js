module.exports = function (bundler) {
    bundler.addAssetType('elm', require.resolve('./ElmHotAsset'));
    console.log("Registered elm extension");
};
