# hc-mobility-fee-calc

> A Vue.js project

## Installation

```html
<div id="app"></div>

<!-- include babel-polyfill for IE11 Promise support -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
<!-- sets HcPrsMrsDepts as a variable -->
<script src="https://commbocc.github.io/mobility-fee-calc/dist/build.js"></script>
<script type="text/javascript">
new HcMobilityFeeCalc().$mount('#app');
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
