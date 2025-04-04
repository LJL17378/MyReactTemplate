// src/hooks/query.js
import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    QueryClient
  } from '@tanstack/react-query'
  import { useCallback } from 'react'
  import http from '../utils/http'
  import { getStore } from '../utils/store'
  import { userTokenAtom } from '../atoms/user'
  
  // 创建默认 queryClient 实例
  export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5分钟缓存
        retry: 1,
        refetchOnWindowFocus: false
      }
    }
  })
  
  // 标准查询键生成器
  const generateQueryKey = (url, isPrivate, params) => [
    isPrivate ? 'private' : 'public',
    url,
    JSON.stringify(params)
  ]
  
  // 通用查询 Hook
  export function useMyQuery(options) {
    const { url, params = {}, private: isPrivate = false } = options
  
    return useQuery({
      ...options,
      queryKey: generateQueryKey(url, isPrivate, params),
      queryFn: async () => {
        // 自动处理私有接口鉴权
        if (isPrivate) {
          const token = getStore().get(userTokenAtom)
          if (!token) throw new Error('需要登录')
        }
        
        return http('get', url, params)
      }
    })
  }
  
  // 分页查询 Hook
  export function useMyInfiniteQuery(options) {
    const {
      url,
      params = {},
      pageKey = 'page',
      private: isPrivate = false
    } = options
  
    const queryKey = generateQueryKey(url, isPrivate, params)
  
    return useInfiniteQuery({
      ...options,
      queryKey,
      queryFn: async ({ pageParam = 1 }) => {
        return http('get', url, {
          ...params,
          [pageKey]: pageParam
        })
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1
    })
  }
  
  // 数据变更 Hook
  export function useMyMutation(options) {
    const { method = 'post', url, private: isPrivate = false } = options
  
    return useMutation({
      ...options,
      mutationFn: async (data) => {
        if (isPrivate) {
          const token = getStore().get(userTokenAtom)
          if (!token) throw new Error('需要登录')
        }
        
        return http(method, url, data)
      },
      onSuccess: () => {
        // 自动刷新相关查询
        queryClient.invalidateQueries({
          queryKey: [generateQueryKey(url, isPrivate)[0]]
        })
      }
    })
  }
  
  // 文件上传 Hook
  export function useUpload(options) {
    const { url, private: isPrivate = true } = options
  
    return useMutation({
      ...options,
      mutationFn: async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        return http('post', url, formData)
      }
    })
  }