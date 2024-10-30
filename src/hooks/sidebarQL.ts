import { useQuery, gql } from "@apollo/client"

export function useCharacterFilter(filterData: "male" | "female" | "human" | "alive"){

    function getQuery(){
        if (filterData.toLowerCase() == 'male' || filterData.toLowerCase() == 'female'){
            return `
                query Query{
                    characters(filter: {gender: "${filterData}"}) {
                        results{
                          id
                          image
                          name
                          status
                          species
                        }
                    }
                }
            `
        }else if(filterData.toLowerCase() == 'human'){
            return `
                query Query{
                    characters(filter: {species: "${filterData}"}) {
                        results{
                          id
                          image
                          name
                          status
                          species
                        }
                    }
                }
            `
        }else if (filterData.toLowerCase() == 'alive'){
            return `
                query Query{
                    characters(filter: {status: "${filterData}"}) {
                        results{
                          id
                          image
                          name
                          status
                          species
                        }
                    }
                }
            `
        }else {
            throw new Error("wtf")
        }
    }

    const GET_FILTERED_CHARACTERS = gql`${getQuery()}`

    const { loading, error, data } = useQuery(GET_FILTERED_CHARACTERS)

    return {
        data,
        loading, 
        error
    }
}
