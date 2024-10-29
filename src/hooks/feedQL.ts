import { useQuery, gql } from "@apollo/client"

export const useCharacters = () => {
  const GET_CHARACTERS = gql`
  query Query{
 	    characters{
        results{
          name
          id
          image
          status
          created
        }
       } 
    }
  `
  const { error, loading, data } = useQuery(GET_CHARACTERS)
  
  return {
      error,
      data,
      loading
  }
}