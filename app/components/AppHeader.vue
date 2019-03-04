<template>
  <header id="header_main">
    <a-layout-header>
      <div class="logo noselect"></div>
      <a-menu mode="inline">
        <a-menu-item>
          First item
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { LayoutHeader, SubPopupMenu, SubMenu, Menu, MenuItem, Icon } from 'ant-design-vue/lib';

@Component({
  components: {
    'a-layout-header': LayoutHeader,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-icon': Icon
  }
})
export default class AppHeader extends Vue {}
</script>
