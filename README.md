A parcel plugin that adds [elm-hot](https://github.com/klazuka/elm-hot) to the built-in Elm support.
This way Parcel HMR can reload an Elm application while keeping the Model intact.

# Usage

Just install the plugin with NPM or Yarn:
```
$ npm install --save-dev parcel-plugin-elm-hot
```
```
$ yarn add --dev parcel-plugin-elm-hot
```

# Changelog

## [1.0.1] - 2018-10-07
### Changed
- Only inject elm-hot if HMR is enabled.
