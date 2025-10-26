// woh controller model pe manipulate kart hai 
const { User } = require("../models/user")

const handleGetAllUsers = async (req,res) => {
    const allDbUsers = await User.find({});
    return res.status(200).json(allDbUsers);
}

const handlePostAllUsers = async (req,res) => {
    const body = req.body; // data from frontend available in the body

    await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  // console.log("result", result);

  return res.status(201).json({ msg: "success" });
  // });
};

const handleGetUserById = async (req,res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
}

const handleEditUserById = async (req,res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(updatedUser);
}

const handleDeleteUserById = async (req,res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully", user: deletedUser });
}

module.exports = {
    handleGetAllUsers, handlePostAllUsers , handleGetUserById , handleEditUserById , handleDeleteUserById
}