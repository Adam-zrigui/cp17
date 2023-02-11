import User from "../model/User.js"

export default function Get(req , res , next) {
  User.find({}, function (err, result)  {
    if(err) return res.status(404).json({message: err.message});
    else    res.json({result});
})
}