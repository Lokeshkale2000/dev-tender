const errfunction =(req,res,next)=>{
    const name = "hjlkjlkjlk";
    const stringlength = name.length;
    if (!name.length) {
        console.log("invalid length");
        res.status(4001)
    } else {
        next();
        
    }
}

module.exports = { errfunction };