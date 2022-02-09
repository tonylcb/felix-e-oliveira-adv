import React from "react";

const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const API_URL = 'https://login-ext.sajadv.com.br/?dominio=felixeoliveiraadvogados'

    const getRequest = React.useCallback(async (email, password) => {
        let response;
        let json;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(API_URL + `/login=${email}&senha=${password}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            json = await response.json();
            if (response.ok === false) throw new Error(json.mensagem);
        } catch (err) {
            json = null;
            setError(err.message);
        } finally {
            console.log('json', json)
            setData(json);
            setLoading(false);
            return { response, json };
        }
    }, []);

    return { data, error, loading, getRequest };
};

export default useFetch;
