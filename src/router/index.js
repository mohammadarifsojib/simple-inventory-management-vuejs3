import { createRouter, createWebHistory } from "vue-router";
const Dashboard = () => import("../views/Dashboard.vue");
const Products = () => import("../views/ProductsView.vue");
const ProductDetails = () => import("../views/ProductDetailsView.vue");

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "dashboard",
			component: Dashboard,
		},
		{
			path: "/products",
			name: "products",
			component: Products,
		},
		{
			path: "/products/:id",
			name: "productDetails",
			component: ProductDetails,
		},
	],
});

export default router;
