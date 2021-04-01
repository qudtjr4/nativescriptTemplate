<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <StackLayout>
          <Button text="Web View EXT" col="0" row="0" @tap="navigateToWebView()" padding="10" backgroundColor="#cc99ff" color="white"/>
          <Button text="aaaa" col="0" row="1" @tap="navigateAndChangeMain()" padding="10" backgroundColor="#cc99ff" color="white"/>
        </StackLayout>
    </Page>
</template>

<script >
import WebView from './WebView';
//import { firebase } from '@nativescript/firebase';

firebase.init({
    // Whether you want this plugin to automatically display the notifications or just notify the callback. Currently used on iOS only. Default true.
  showNotifications: true,
  autoClearBadge: false,
  // Whether you want this plugin to always handle the notifications when the app is in foreground. Currently used on iOS only. Default false.
  showNotificationsWhenInForeground: true,
  onPushTokenReceivedCallback: function(token) {
      console.log("Firebase push token: " + token);
      
  },
  onMessageReceivedCallback: function(message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
    }
}).then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);
  export default {
    data() {
      return {
        
      }
    },
    methods :{
      navigateToWebView(){
        this.$navigateTo(WebView)
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
