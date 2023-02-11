import {connect , set} from 'mongoose'
set('strictQuery', true)

const db = async () => {
    try {
        connect(process.env.MONGO_URI, {
       
        })
        console.log('database connection established')
    } catch (error) {
        console.error(error)
    }
}
export default db; 
