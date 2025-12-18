import { useEffect, useState } from "react";
import type { Product } from "../types";
import { handleAsyncErrors } from "../lib/handleErrors";
import { PRODUCTS } from "../constants";


function fakeFetchProducts(searchTerm = '', category = 'all') {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
    let items = PRODUCTS;
      if(category && category !== 'all'){
        items = items.filter(item => item.category === category);
      }
      if(searchTerm){
         items = items.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      resolve(items);
    }, 1000);
  });
}

async function fetchAvailableProducts(searchTerm = '', category = 'all'){
    const [error, result] = await handleAsyncErrors(fakeFetchProducts(searchTerm, category));
    if(error){
        // TODO
    }
    const items = result || [];
    return items.filter(item => item.isPrescription);
}



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
