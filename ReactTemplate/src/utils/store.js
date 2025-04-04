let globalStore = null

export const setGlobalStore = (store) => {
  // 防止重复初始化
  if (globalStore && import.meta.env.PROD) {
    console.warn('全局store已存在，禁止重复设置')
    return
  }
  globalStore = store
}

export const getStore = () => {
  if (!globalStore) {
    if (typeof window !== 'undefined') {
      throw new Error('Store未初始化! 请检查入口文件')
    }
    // SSR兼容处理
    return createStore()
  }
  return globalStore
}