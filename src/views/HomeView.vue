<script setup lang="ts">
import WrapperElement from '@/components/elements/WrapperElement.vue';
import SectionElement from '@/components/elements/SectionElement.vue';

import TaskList from '@/components/tasks/TaskList.vue';
</script>

<template>
  <WrapperElement>
    <SectionElement title="">
      <template #content>
        <TaskList />
      </template>
    </SectionElement>
  </WrapperElement>
</template>
