class StoreCache {
  constructor(key, store = window.localStorage) {
    if(!key) throw Error('invalid key')
    this.key = key;
    this.store = store;
  }

  get(key) {
    return (JSON.parse(this.store.getItem(this.key)))?.[key]
  }

  update(values) {
    return this.store.setItem(this.key, JSON.stringify(values))
  }
}

export default function Cache(key) {
  let instance;
  try {
    instance = new StoreCache(key);
  } catch (error) {
    throw Error(error); 
  }

  return function(){
    return instance;
  }
}
