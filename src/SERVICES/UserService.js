import axios from 'axios';

const Service = {
    
    getUser: async()=>{
        let result = await axios.get('https://localhost:7145/api/Users')///add return copy from swagger the url
        console.log(result.data);
        return result.data;
    },

    updateAd: async()=>{

    }
}


export default Service;