import User from "../model/User.js";
export default async function postDB(req, res) {
    const user = await req.body;
    const newUser = new User(user)
    await newUser.save()
    res.json(user);

}
