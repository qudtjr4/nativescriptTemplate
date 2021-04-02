<template>
    <Page>
        <!-- <StackLayout>
            <Label text="HELLO" />
            <Button text="Scan" col="0" row="1" @tap="takePhoto()" padding="10" backgroundColor="#cc99ff" color="white"/>
			<WrapLayout>
				<Image v-for="img in imgs" :src="img.src" width="100" height="100" />
			</WrapLayout>
        </StackLayout> -->
        <!-- <StackLayout>
        <Button text="Scan" col="0" row="1" @tap="barcodeScan()" padding="10" backgroundColor="#cc99ff" color="white"/>
        </StackLayout> -->

        <!-- <BarcodeScanner
            row="1"
            formats="QR_CODE, EAN_13, UPC_A"
            reportDuplicates="true"
            preferFrontCamera="false"
            @scanResult="onScanResult"
            fullScreen: "true"
            openSettingsIfPermissionWasPreviouslyDenied: "true"
            
            >
        </BarcodeScanner> -->
        <Label text="점검중..." />
    </Page>
</template>
<script >
import { isAvailable, takePicture } from '@nativescript/camera';
const { Image } = require("@nativescript/core");
import {BarcodeScanner} from "nativescript-barcodescanner";

export default {
    data(){
        return {
            imgs : [],
            isIOS : true,
        }
    },
   methods :{
    //    takePhoto(){
    //         var self = this;
    //         console.dir("ASDASDASDASDASDASDASDASDASDASDASDASDASDASD")
    //         takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery:true })   
    //             .then(function (imageAsset) {
    //                 console.log("Result is an image asset instance");
    //                 var image = new Image();
    //                 image.src = imageAsset;
    //                 console.dir(imageAsset);
    //                 self.imgs.push(image);

    //             }).catch(function (err) {
    //                 console.log("Error -> " + err.message);
    //             });
    //             const isAvailableCamera = isAvailable(); 
    //             console.log("is Camera Available :" + isAvailableCamera)

    //     },
    //   onScanResult(evt) {
    //     console.log(`onScanResult: ${evt.text} (${evt.format})`);
    //   },
    //   doScanWithBackCameraWithFlip() {
    //     this.scan(false, true);
    //   },
    //   doScanWithFrontCameraNoFlip() {
    //     this.scan(true, false);
    //   },
    //   scan(preferFrontCamera, showFlipCameraButton) {
    //     new BarcodeScanner().scan({
    //       cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
    //       cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
    //       message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
    //       preferFrontCamera,            // Android only, default false
    //       showFlipCameraButton,         // default false
    //       showTorchButton: true,        // iOS only, default false
    //       torchOn: false,               // launch with the flashlight on (default false)
    //       resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
    //       beepOnScan: true,             // Play or Suppress beep on scan (default true)
    //       openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
    //       closeCallback: () => {
    //         console.log("Scanner closed @ " + new Date().getTime());
    //       }
    //     }).then(
    //         function (result) {
    //           console.log("--- scanned: " + result.text);
    //           // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
    //           setTimeout(function () {
    //             // if this alert doesn't show up please upgrade to {N} 2.4.0+
    //             alert({
    //               title: "Scan result",
    //               message: "Format: " + result.format + ",\nValue: " + result.text,
    //               okButtonText: "OK"
    //             });
    //           }, 500);
    //         },
    //         function (errorMessage) {
    //           console.log("No scan. " + errorMessage);
    //         }
    //     );
    //   }
   },
   mounted(){
    //    console.log("asodjoasjkod");
    //     const barcodescanner = new BarcodeScanner();
    //     console.log(barcodescanner);
        // barcodescanner.scan({
        //     formats: "QR_CODE,PDF_417",   // Pass in of you want to restrict scanning to certain types
        //     cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
        //     cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
        //     message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
        //     showFlipCameraButton: true,   // default false
        //     preferFrontCamera: false,     // default false
        //     showTorchButton: true,        // default false
        //     beepOnScan: true,             // Play or Suppress beep on scan (default true)
        //     fullScreen: true,             // Currently only used on iOS; with iOS 13 modals are no longer shown fullScreen by default, which may be actually preferred. But to use the old fullScreen appearance, set this to 'true'. Default 'false'.
        //     torchOn: false,               // launch with the flashlight on (default false)
        //     closeCallback: function () { console.log("Scanner closed"); }, // invoked when the scanner was closed (success or abort)
        //     resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
        //     orientation: "landscape",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
        //     openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
        // }).then(
        //     function(result) {
        //         console.log("Scan format: " + result.format);
        //         console.log("Scan text:   " + result.text);
        //     },
        //     function(error) {
        //         console.log("No scan: " + error);
        //     }
        //);
   },
};
</script>
