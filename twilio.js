import axios from 'axios'

export const getToken = async (phoneNumber) => {
    
    try {
        const resp = await axios.post('https://tickets-app-production.herokuapp.com/api/v1/login/sendVerification',{phoneNumber})
        return resp
    } catch (err) {
        console.log(err.response ? err.response.data.error : err.message)
    }
}

export const verifyToken = async (phoneNumber, code) => {

    try {
        const resp = await axios.post('https://tickets-app-production.herokuapp.com/api/v1/login/checkVerification', {phoneNumber, token: code})
        return resp
    } catch (error) {
        console.log(error)
    }

}