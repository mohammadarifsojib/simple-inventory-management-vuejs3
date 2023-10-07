<script setup>
	import { onMounted, ref } from "vue";
	import Layout from "../components/Layout.vue";
	import Breadcrumb from "../components/Breadcrumb.vue";
	import Vue3EasyDataTable from "vue3-easy-data-table";
	import "vue3-easy-data-table/dist/style.css";
	import { useRouter } from "vue-router";
	const router = useRouter();

	function editBtn(id, text) {
		const resolvedRoute = router.resolve({
			name: "productDetails",
			params: { id: id },
		});
		const link = resolvedRoute.href;
		return `<a href="/products/${id}" class="bg-sky-600 text-white px-2 py-1 rounded">${text}</a>`;
	}

	const headers = [
		{ text: "Title", value: "title" },
		{ text: "Description", value: "description" },
		{ text: "Price", value: "price" },
		{ text: "Stock", value: "stock", sortable: true },
		{ text: "Action", value: "action" },
	];
	const products = ref([]);

	onMounted(async () => {
		const res = await fetch("https://dummyjson.com/products").then((result) => {
			return result.json();
		});
		products.value = res.products;
		products.value.map((product) => {
			product.action = editBtn(product.id, "ProductDetails");
		});
	});

	const loading = ref(false);
</script>
<template>
	<Layout>
		<!-- Breadcrumb -->
		<Breadcrumb />
		<div class="mt-10">
			<Vue3EasyDataTable
				buttons-pagination
				show-index
				:loading="loading"
				:headers="headers"
				:items="products"
			>
				<template #item-action="{ action }">
					<div v-html="action"></div>
				</template>
			</Vue3EasyDataTable>
		</div>
	</Layout>
</template>
