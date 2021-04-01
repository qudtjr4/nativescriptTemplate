### WEB_VIEW_EXT
## SET_UP
# FOR_IOS 
<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
</dict>

# FOR_ANDROID
SET MINIMUM SDK 19
//inside of the loaded event 
const webView = event.object
        //For Android Set up
        if(webView.android){
            webView.android.getSettings().setDomStorageEnabled(true);
            webView.android.getSettings().setBuiltInZoomControls(false);
            webView.android.getSettings().setAllowFileAccess(true);
            webView.android.getSettings().setJavaScriptEnabled(true);
            webView.android.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
}

## DATA_TRANSPER
//inside of the WEBVIEWEXT tag
@eventFromWeb='processEvent'
//inside of the methods in scipt
processEvent(args) {
      console.log("EVENT RECEIVED FROM WEB~!")
      console.dir(args.data.a);
},


# NativeScript-Vue Application

> A native application built with NativeScript-Vue

## Usage

``` bash
# Install dependencies
npm install

# Preview on device
tns preview

# Build, watch for changes and run the application
tns run

# Build, watch for changes and debug the application
tns debug <platform>

# Build for production
tns build <platform> --env.production

```
