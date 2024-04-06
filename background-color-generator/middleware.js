const logger = (req,res,next)=>{
    console.log("I run before every request!");
    next();
}

module.exports = logger;