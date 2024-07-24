import { Vehicle } from "../models/vehicleModel.js";

export const addVehicle = async (req, res) => {
  try {
    const { name, description, price, manufacture, model, image } = req.body;
    console.log("the body",req.body)
    const vehicle = await Vehicle.create({
      name: name,
      description: description,
      price: price,
      manufacture: manufacture,
      model: model,
      image: image,
    });
    if (vehicle) {
      return res
        .status(200)
        .json({ status: true, message: "vehicle added successfuly" });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "error in adding vehicle" });
    }
  } catch (error) {
    console.log("error in adding vehicle", error);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, manufacture, model, image } = req.body;
    const response = await Vehicle.findByIdAndUpdate(
      (id,
      {
        name: name,
        description: description,
        price: price,
        manufacture: manufacture,
        model: model,
        image: image,
      })
    );
    if (response) {
      return res
        .status(200)
        .json({
          status: true,
          message: "vehicle updated successfully",
          data: response,
        });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "error in updating vehicle" });
    }
  } catch (error) {
    console.log("error in updating vehicle", error);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Vehicle.findByIdAndDelete(id);
    if (response) {
      return res
        .status(200)
        .json({ status: true, message: "vehicle deleted successfully" });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "error in deleting vehicle" });
    }
  } catch (error) {
    console.log("error in deleting vehicle", error);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};

export const searchVehicle = async (req, res) => {
  try {
    const { regex } = req.params;
    const response = await Vehicle.find({
      $regex: [
        {
          name: ".*" + regex + "*.",
          options: "i",
        },
        {
          description: ".*" + regex + "*.",
          options: "i",
        },
        {
          model: ".*" + regex + "*.",
          options: "i",
        },
      ],
    });
    if (response) {
      return res
        .status(200)
        .json({
          status: true,
          message: "vehicle found successfully",
          data: response,
        });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "error in searching vehicle" });
    }
  } catch (error) {
    console.log("error in searching vehicle", error);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};
export const getAllVehicles = async(req,res) => {
    try{
        const response =await Vehicle.find({})
        if(response){
            return res.status(200).json({status:true,data:response})
        }
        else{
            return res.status(400).json({status:false,message:"nothing to display"})

        }
    }
    catch(error){
        console.log("error in getting vehicles",error)
        return res.status(500).json({status:false,message:"internal server error"})
    }
}
export const getVehicleById = async(req,res) => {
    try {
        const {id} = req.params  
        const response = await Vehicle.findById(id)
        if(response){
            return res.status(200).json({sttaus:true,data:response})
        }
        else{
            return res.status(400).json({status:false,message:"vehicle not found"})
        }
    } catch (error) {
        console.log("error in getting vehicle",error)
        return res.status(500).json({status:false,message:"internal server error"})
    }
}