<script setup>
const description =
    "I have worked on numerous personal and professional projects over the years, but I take pride in the following ones the most.";

useSeoMeta({
    title: "Projects | Nathaniel Naduaran",
    description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
    queryContent("/projects").find()
);
</script>

<template>
    <main class="min-h-screen">
        <AppHeader class="mb-12" title="Projects" :description="description" />
        <div class="space-y-4">
            <AppProjectCard
                v-for="(project, id) in projects"
                :key="id"
                :project="project"
            />
        </div>
    </main>
</template>
