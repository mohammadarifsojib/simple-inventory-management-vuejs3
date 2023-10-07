<script setup>
	import Layout from "../components/Layout.vue";
	import { ref, onMounted } from "vue";
	import { useRoute } from "vue-router";
	let product = ref([]);
	const route = useRoute();
	let id = route.params.id;
	onMounted(async () => {
		const res = await fetch(`https://dummyjson.com/products/${id}`);
		const data = await res.json();
		product.value = data;
	});
</script>
<template>
	<Layout>
		<RouterLink
			:to="{ name: 'products' }"
			class="bg-sky-600 text-white px-2 py-1 rounded-sm"
			>Back</RouterLink
		>
		<h1 class="mt-5 text-2xl font-bold">Product Details</h1>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 py-14">
			<div class="border border-gray-300 rounded-lg p-4 text-center">
				<img :src="product.thumbnail" :alt="product.title" class="mx-auto" />
			</div>
			<div class="space-y-3 px-4 py-5">
				<h3 class="text-lg text-gray-900 font-bold">
					Product:
					{{ product.title }}
				</h3>

				<p v-if="product.discountPercentage">
					<b>Price:</b>
					<span class="text-sky-500 font-bold">
						${{
							product.price -
							Math.ceil((product.price * product.discountPercentage) / 100)
						}}
					</span>
					<del class="text-red-500 text-sm ml-2">${{ product.price }}</del>
				</p>
				<p v-else>
					<b>Price: </b>
					<span class="text-sky-500 font-bold">${{ product.price }}</span>
				</p>
				<p><b>Discount:</b> {{ product.discountPercentage }}%</p>
				<p>
					<b>Brand: </b>
					<span class="text-sky-500">{{ product.brand }}</span>
				</p>
				<p>
					<b>Category: </b>
					<span class="text-sky-500">{{ product.category }}</span>
				</p>
				<p class="mb-6">
					<b>Descriptions:</b>
					{{ product.description }}
				</p>
			</div>
		</div>
	</Layout>
</template>
