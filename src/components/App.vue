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
