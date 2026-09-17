async function authAdminMiddleware (req,res,next){  
    if(!req.user || req.user.role != "admin"){
        return res.status(403).json({
            message: "ACESSO NEGADO"
        })
    }
}

export default authAdminMiddleware;