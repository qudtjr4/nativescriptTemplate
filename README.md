# WEBVIEW_EXT
## SET_UP
### INSTALL 
> 1. tns plugin add @nota/nativescript-webview-ext
> 2. Vue.registerElement('WebViewExt', () => require('@nota/nativescript-webview-ext').WebViewExt)
## DATA_TRANSPER
## WEBVIEW
## EVENT BLOCK OR PROCESS
<hr />

# FIREBASE
## SET_UP
> 1. tns plugin add @nativescript/firebase
> 2. CLI SET_UP -> firebase.nativescript.json
> 3. external_push_client_only: true
> 4. messaging: true
> 5. adding google-service file both platform

### PUSH_NOTIFICATION FOR IOS
> 1. Enable Push notification in XCode
> 2. Copy <application.name>.entitlement file in platform to App_Resources.IOS
> 3. Register APN Key in Firebase Console






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
