<template>
<NavPage></NavPage>
<ContentPage></ContentPage>
<FooterPage></FooterPage>
</template>

<script>

import NavPage from './components/default/NavPage.vue'; 
import ContentPage from './components/default/ContentPage.vue';
import FooterPage from './components/default/FooterPage.vue';

export default{
  name: 'App',
  components: {
    NavPage, ContentPage, FooterPage
  }
}

</script>

<style>

</style>
