<template>
  <div id="app">
    <a-layout class="layout" type="flex" justify="center" align="middle">
      <AppHeader/>
      <a-layout-content class="layout-content">
        <nuxt/>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import AppHeader from '@/components/AppHeader.vue';

import { Layout, LayoutContent, LayoutFooter } from 'ant-design-vue/lib';

@Component({
  components: {
    AppHeader,
    'a-layout': Layout,
    'a-layout-content': LayoutContent,
    'a-layout-footer': LayoutFooter
  }
})
export default class App extends Vue {}
</script>
