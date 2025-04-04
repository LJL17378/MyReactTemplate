import { useMyQuery } from "../query"
export const useTest = () => {
    const { 
        data,
        isLoading,
        error,
        isFetching,
        refetch 
      } = useMyQuery({
        url: '/todos'
      })
      //一些数据处理
      
      return {
        data,
        isLoading,
        error,
        isFetching,
        refetch
      }
} 