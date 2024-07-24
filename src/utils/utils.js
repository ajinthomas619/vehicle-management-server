import bcrypt from 'bcrypt'
import jwt from'jsonwebtoken'

export const hashPassword = async(password) => {
    const salt = bcrypt.genSalt(10)
    const hashedPass= bcrypt.hash(password,salt)
    console.log("the hashed password",hashedPass)
    return hashedPass
}

export const comaprePassword = async(password,hashedPassword) =>{
    const isMatch = await bcrypt.compare(password,hashedPassword)
    return isMatch
}
export const createAccessToken = (id,JWT_SECRET_KEY) =>{
    const Id =  jwt.sign({id},JWT_SECRET_KEY,{expiresIn:"1d"})
    console.log("the token is",id)
    return Id
}

export const verifyUser = async(token,JWT_SECRET_KEY) =>{
    try{
    return jwt.verify(token,JWT_SECRET_KEY)
    }
    catch(error){
        console.log("error in verifying user",error)
    }
}



