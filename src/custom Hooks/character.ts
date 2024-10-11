import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
query GetCharacter($id: ID!){
       character(id: $id){
        name
        id
        status
        species
        gender
        created
        image
        location{
        name
      }
      }
     } 
`

export const useCharacter = (id: number) => {
    const {data,error,loading} = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    })

    return{
        data,
        error,
        loading,
    }
}