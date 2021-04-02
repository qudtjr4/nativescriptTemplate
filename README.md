# WEBVIEW_EXT
## SET_UP
### INSTALL 
>tns plugin add @nota/nativescript-webview-ext
>Vue.registerElement('WebViewExt', () => require('@nota/nativescript-webview-ext').WebViewExt)
## DATA_TRANSPER
## WEBVIEW
## EVENT BLOCK OR PROCESS


# FIREBASE
## SET_UP
>tns plugin add @nativescript/firebase
>CLI SET_UP -> firebase.nativescript.json
>external_push_client_only: true
>messaging: true
>adding google-service file both platform

### PUSH_NOTIFICATION FOR IOS
>Enable Push notification in XCode
>Copy <application.name>.entitlement file in platform to App_Resources.IOS
>Register APN Key in Firebase Console






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
