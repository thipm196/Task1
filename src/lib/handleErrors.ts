
export async function handleAsyncErrors<T>(func: Promise<T>) {
  const results: [Error | undefined, T | undefined] = [undefined, undefined];
  try {
    const result = await func;
    results[1] = result;
    return results
  } catch (err) {
    results[0] = err as Error;
    return results;
  }
}
