<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchTasks } from '@/services/api';

const tasks = ref([]);

onMounted(async () => {
    tasks.value = await fetchTasks();
});
</script>

<template>
         <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-6 dark:bg-black-lightend text-gray-800 dark:text-white">
            <h1 class="text-2xl font-bold  mb-4">Liste des tâches ESGI</h1>
            <ul class="divide-y divide-gray-200">
                <li 
                    v-for="task in tasks" 
                    :key="task.id" 
                    class="flex items-center justify-between py-3"
                >
                    <span class="">{{ task.title }}</span>
                    <span 
                        class="text-lg" 
                        :class="task.completed ? 'text-green-500' : 'text-red-500'"
                    >
                        {{ task.completed ? '✅' : '❌' }}
                    </span>
                </li>
            </ul>
        </div>
 </template>
