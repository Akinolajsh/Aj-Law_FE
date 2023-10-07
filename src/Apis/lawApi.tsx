import axios from 'axios';

const url:string="https://lawaj.onrender.com/api"


export const interpreteLaw =async( id:string,  data:any)=>{

    try {
        const config:any={
            "content-type": "multipart/form-data",
            // headers: {
            //     authorization: `Bearer ${token}`
            // }
        }
        return await axios.post(`${url}/${id}/create-law`, data, config).then((res:any)=>{
            // return res.data.data
            console.log(res.data.data)
        })
    } catch (error) {
        console.log(error)
    }
}

export const viewLaw =async()=>{
    try {
        return await axios.get(`${url}/view-all`).then((res:any)=>{
            console.log("res",res.data.data)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const viewSingleLaw =async(lawID:string)=>{
    try {
        return await axios.get(`${url}/${lawID}/view-one`).then((res:any)=>{
            console.log("res",res)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const seeLawyerLaw =async(id:string)=>{
    try {
      return await axios.get(`${url}/${id}/view-lawyer-law`, ).then((res:any)=>{
        console.log("first" ,res)
        return res.data.data
      })  
    } catch (error) {
      console.log(error)  
    }
}