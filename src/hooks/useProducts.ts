import { useEffect, useState } from "react";
import type { Product } from "../types";
import { fetchAvailableProducts } from "../api/ProductApi";



export function useProducts(searchTerm = '', category = 'all') {
  const [isFetching, setFetching] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchListProducts = (search?: string, category = 'all') => {
    setFetching(true);
    fetchAvailableProducts(search, category).then((items) => {
        setProducts(items)
    }).finally(() => {
        setFetching(false);
    });
  }

    useEffect(() => {
        fetchListProducts(searchTerm, category)
    }, [searchTerm , category]);

  useEffect(() => {
    fetchListProducts();
  }, []);
  return { isFetching, products };
}
