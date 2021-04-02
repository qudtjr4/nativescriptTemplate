<template>
    <Page>
        <WebViewExt @loaded='onLoaded' @eventTest='eventTest2' 
        :src="url" />
    </Page>
</template>
<script >
import { isAvailable, requestCameraPermissions, takePicture } from '@nativescript/camera';

var imageModule = require("tns-core-modules/ui/image");
requestCameraPermissions().then(
    function success() {
    // permission request accepted or already granted 
    // ... call camera.takePicture here ...
    // camera.takePicture()   
    //     .then(function (imageAsset) {
    //         console.log("Result is an image asset instance");
    //         var image = new imageModule.Image();
    //         image.src = imageAsset;
    //     }).catch(function (err) {
    //         console.log("Error -> " + err.message);
    //     });
    }, 
    function failure() {
    // permission request rejected
        console.log("FAIL TO ROAD CAMERA")
    }
);
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
