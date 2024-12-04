<script setup lang="ts">
import WrapperElement from '@/components/elements/WrapperElement.vue';
import SectionElement from '@/components/elements/SectionElement.vue';

import TaskList from '@/components/tasks/TaskList.vue';
</script>

<template>
  <WrapperElement>
    <SectionElement title="Accueil">
      <template #content>
        <p class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <TaskList />
      </template>
    </SectionElement>
  </WrapperElement>
</template>
