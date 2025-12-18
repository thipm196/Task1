import { useCallback, useEffect, useState } from "react";
import type { Product } from "../types";
import { fetchAvailableProducts } from "../api/ProductApi";
import { debounce } from "../lib/debounce";



export function useProducts(searchTerm = '', category = 'all') {
    const [isFetching, setFetching] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    const fetchListProducts = useCallback(async (search: string, categoryParams: string) => {
      setFetching(true);
      try {
        const items = await fetchAvailableProducts(search, categoryParams);
        setProducts(items);
      } finally {
        setFetching(false);
      }
    }, []);

    const debouncedFetchProducts = useCallback(debounce(fetchListProducts, 400), [fetchListProducts]);

    useEffect(() => {
        debouncedFetchProducts(searchTerm, category)
    }, [searchTerm , category]);

    return { isFetching, products };
}
