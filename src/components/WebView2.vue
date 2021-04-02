<template>
    <Page>
        <WebViewExt @loaded='onLoaded' @openBarcode='processEvent' 
        :src="url" />
    </Page>
</template>
<script >
import Camera from './Camera';
export default {
    props : ['url'],
    data(){
        return {
        }
    },
   methods :{
    processEvent(args) {
      console.log("EVENT RECEIVED FROM WEB~!");
      console.dir(args.data);
      this.$navigateTo(Camera);
    },
    
    onLoaded(event) {
        
        const webView = event.object
    
        if(webView.android){
            webView.android.getSettings().setDomStorageEnabled(true);
            webView.android.getSettings().setBuiltInZoomControls(false);
            webView.android.getSettings().setAllowFileAccess(true);
            webView.android.getSettings().setJavaScriptEnabled(true);
            webView.android.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        }
        
    },
   },
   mounted(){
       console.dir("ASDASDASDASDASDASDASDASDASDASDASDASDASDASD")
       console.log(this.url)
   },
};
</script>
