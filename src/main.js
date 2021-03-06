import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

Vue.registerElement('WebViewExt', () => require('@nota/nativescript-webview-ext').WebViewExt)
Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView);


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
