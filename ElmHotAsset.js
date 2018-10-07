const {inject} = require('elm-hot');
const ElmAsset = require('parcel-bundler/src/assets/ElmAsset');


class ElmHotAsset extends ElmAsset {
  constructor(name, options) {
    super(name, options);
    this.hmrPageReload = false;
  }

  async parse() {
    await super.parse();
    if (this.options.hmr) {
      this.contents = inject(this.contents);
    }
  }
}

module.exports = ElmHotAsset;
