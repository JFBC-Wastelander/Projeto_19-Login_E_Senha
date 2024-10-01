import jwt_services from "../services/jwt_services.js"

const authenticator = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")(1)
        let user = jwt_services.verifyToken(token)
    
        if (user) {
            req.user = user
            next()
        }
        
        throw new Error()
    } catch (error) {
        res.sendStatus(401)
    }
}