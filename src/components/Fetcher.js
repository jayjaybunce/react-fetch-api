import React from 'react'
import CREDS from '../creds'
import getDataFromApi from '../services/fetcher'



class Fetcher extends React.Component{
    async componentDidMount(){
        let api_creds = CREDS[this.props.api]
        let results = await getDataFromApi(api_creds)
        console.log(results)
    }


    render(){
        return(
            <div>
                Fetcher
                
            </div>
        )
    }
}

export default Fetcher;