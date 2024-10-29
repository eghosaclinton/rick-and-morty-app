import { gql, useQuery } from "@apollo/client";

export const useCharacter = (id: string) => {
    const GET_CHARACTER = gql`
        query Query{
            character(id: ${id}){
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

    const { data, error, loading} = useQuery(GET_CHARACTER)

    return {
        data,
        error,
        loading,
    }
}