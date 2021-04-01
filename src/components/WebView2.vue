<template>
    <Page>
        <WebViewExt @loaded='onLoaded' @eventTest='eventTest2' 
        :src="url" />
    </Page>
</template>
<script >
export default {
    props : ['url'],
    data(){
        return {
        }
    },
   methods :{
    eventTest2(args) {
      console.log("EVENT RECEIVED FROM WEB~!")
      console.dir(args.data.a);
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
   },
};
</script>
