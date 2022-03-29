<script lang="ts" setup>
import { VTFlyout } from '../../core';
import { isActive, resolveBasePath } from '../support/utils';
import { useData } from 'vitepress';
import { NavItemWithChildren } from '../config';

defineProps<{
  item: NavItemWithChildren;
}>();

const { page, site } = useData();
</script>

<template>
  <VTFlyout
    :class="{
      VPNavBarMenuGroup: true,
      active: isActive(page.relativePath, resolveBasePath(item.activeMatch, site.base), true)
    }"
    :button="item.text"
    :items="item.items"
  />
</template>

<style scoped>
.VPNavBarMenuGroup.active {
  border-bottom: 1px solid var(--vt-c-brand);
  height: var(--vt-nav-height);
}
</style>
