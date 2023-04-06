import passport from "passport"
import jwt from 'passport-jwt'

const JWTstrategy = jwt.Strategy
const extractJWT = jwt.ExtractJwt
const initPassport=()=>{
    passport.use('jwt',new JWTstrategy({
        jwtFromRequest:extractJWT.fromExtractors([cookieExtractor]),
        secretOrKey:'CoderSecret'
    },async(jwt_payload,done)=>{
        try{
            return done(null,jwt_payload)
        }
        catch(error){
            return done(error)
        }
    }))
}

const cookieExtractor=req=>{
    let token = null
    if(req && req.cookies){
        token=req.cookies['coderCookieToken']
        console.log('---->'+token)
    }
    return token
}

export default initPassport