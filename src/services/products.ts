const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  getAll: () => fetch(`${BASE_URL}/products`).then((res) => res.json()),
  getOne: (id: number) => fetch(`${BASE_URL}/products/${id}`).then((res) => res.json()),
  getCategories: () => fetch(`${BASE_URL}/products/categories`).then((res) => res.json())
};
