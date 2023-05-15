import StoreCache from './StoreCache';
const CACHE_KEY = 'trivia-cache'

export async function wrappedFetch(url) {
  try {
    return (await fetch(url)).json();
  } catch (error) {
    throw Error(error.message)
  }
}

export const cache = StoreCache(CACHE_KEY)

export const CacheMiddleware = store => next => action => {
  const cache = StoreCache(CACHE_KEY)();
  let result = next(action)
  cache.update(store.getState())
  return result
}

export const HTMLDecoder = () => {
  const doc = document.createElement('textarea')

  return function(str) {
    doc.innerHTML= str;
    return doc.value;
  };
}
