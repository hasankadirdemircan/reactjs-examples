import { useQuery } from '@tanstack/react-query'
import Axios from "axios"

export const Home = () => {
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((response) => response.data);
    });

    if(isError) {
        return <h1> Sorry, something went wrong </h1>
    }
    if(isLoading) {
        return <h1> data is loading...</h1>
    }
    return (
            <h1>
                This is the home page <p> {catData?.fact}</p>
                <button onClick={refetch}> Update Data </button>
            </h1>
    ) 
}