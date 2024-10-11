import { useQuery, gql } from "@apollo/client"

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

export const useCharacters = () => {
    const { error, loading, data } = useQuery(GET_CHARACTERS)
    return {
        error,
        data,
        loading
    }
}