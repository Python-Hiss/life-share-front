import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = 'http://127.0.0.1:8000';
import { useAuth } from '../contexts/auth'

export default function useResource() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url+"/api/all", config());

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }
    
    async function createResource(info) {

        try {
            await axios.post(apiUrl+"/api/all/", info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {
        
        try {
            const url = apiUrl+"/api/" + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    function handleError(error) {
        console.error(error);
        logout();
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
    }
}