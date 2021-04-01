<template>
    <Page>
        <WebViewExt @loaded='onLoaded' @eventFromWeb='processEvent' @shouldOverrideUrlLoading="urlChange" 
        src="http://ffc.eventconnector.net/admin/productsManagement/pricePerProduct" />
    </Page>
</template>
<script>
import WebView2 from './WebView2';
export default {
    
    data(){
        return {
        }
    },
   methods :{
    
    processEvent(args) {
      console.log("EVENT RECEIVED FROM WEB~!")
      console.dir(args.data.a);
    },
    
    onLoaded(event) {
        
        const webView = event.object
        //For Android Set up
        if(webView.android){
            webView.android.getSettings().setDomStorageEnabled(true);
            webView.android.getSettings().setBuiltInZoomControls(false);
            webView.android.getSettings().setAllowFileAccess(true);
            webView.android.getSettings().setJavaScriptEnabled(true);
            webView.android.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        }
        
    },
    /* 
    args =>"eventName": "shouldOverrideUrlLoading",
            "httpMethod": "GET",
            "navigationType": "other",  
    */
    urlChange(args){
        if(args.navigationType === "linkClicked"){
            //cancel navigate event
            args.cancel = true;
            this.$navigateTo(WebView2, {props : {url : args.url}})
        }
    },
   },
};
</script>
