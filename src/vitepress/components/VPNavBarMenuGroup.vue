<script lang="ts" setup>
import { VTFlyout } from '../../core';
import { isActive } from '../support/utils';
import { useData } from 'vitepress';
import { NavItemWithChildren } from '../config';
import { computed } from 'vue';

defineProps<{
  item: NavItemWithChildren;
}>();

const { page, site } = useData();

const relativePath = computed(() => page.value.relativePath.replace(site.value.base, ''));
</script>

<template>
  <VTFlyout
    :class="{
      VPNavBarMenuGroup: true,
      active: isActive(relativePath, item.activeMatch, true)
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
