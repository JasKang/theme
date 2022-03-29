<script lang="ts" setup>
import { MenuItemWithLink } from '../../core';
import VPSidebarLink from './VPSidebarLink.vue';
import { isActive } from '../support/utils';
import { useData } from 'vitepress';
import { computed } from 'vue';

const props = defineProps<{
  text: string;
  items: MenuItemWithLink[];
}>();

const { page, site } = useData();
const relativePath = computed(() => page.value.relativePath.replace(site.value.base, ''));
function hasActiveLink() {
  return props.items.some((item) => isActive(relativePath.value, item.link));
}
</script>

<template>
  <section class="VPSidebarGroup">
    <div class="title">
      <h2 class="title-text" :class="{ active: hasActiveLink() }">
        {{ text }}
      </h2>
    </div>

    <template v-for="item in items" :key="item.link">
      <VPSidebarLink :item="item" />
    </template>
  </section>
</template>

<style scoped>
.title {
  padding: 6px 0;
}

@media (min-width: 960px) {
  .title {
    padding: 4px 0;
  }
}

.title-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
}
</style>
