async function getDataFromApi(api){
    let apiUrl = api.BASE_URL + api.API_KEY
    let results = await fetch(apiUrl)
    results = await results.json()
    return results
}


export default getDataFromApi;