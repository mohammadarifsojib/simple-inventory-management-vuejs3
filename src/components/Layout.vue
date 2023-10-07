<script setup>
	import { onMounted } from "vue";
	import { initFlowbite } from "flowbite";
	import Sidebar from "./Sidebar.vue";
	import Navbar from "./Navbar.vue";
	onMounted(() => {
		initFlowbite();
	});
</script>
<template>
	<div class="antialiased bg-gray-50 dark:bg-gray-900">
		<!-- Navbar -->
		<Navbar />
		<!-- Sidebar -->
		<Sidebar />

		<main class="p-4 md:ml-52 h-auto pt-20">
			<slot></slot>
		</main>
	</div>
</template>
