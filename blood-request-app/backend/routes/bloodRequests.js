const express = require("express");
const BloodRequest = require("../models/BloodRequest");

const router = express.Router();

// READ all
router.get("/", async (req, res) => {
  const requests = await BloodRequest.find().sort({ createdAt: -1 });
  res.json(requests);
});

router.get("/find-by-status", async (req, res) => {
  const bloodRequest = await BloodRequest.find({ status: "PUBLISHED" });

  res.status(201).json(bloodRequest);
});



router.get("/find-by-city",async(req,res)=>{
  const bloodRequest = await BloodRequest.find ({city:"casablanca"})
  res.status(201).json(
    bloodRequest
  )
})





router.get("/find-by-hosiptal",async(req,res)=>{
  const bloodRequest = await BloodRequest.find({hospital:"Hôpital Ibn Sina"})
  res.status(201).json(
    bloodRequest
  )
})












router.get("/find-by-blood",async(req,res)=>{

  const bloodRequest = await BloodRequest.find({bloodTypeNeeded:"B+"})
  res.status(200).json(
    bloodRequest
  )
  BloodRequest
})



router.get("/requests",async(req,res)=>{

  const bloodRequest = await BloodRequest.find({city:"casablanca" , bloodTypeNeeded:"A-"})
  res.status(200).json(
    bloodRequest
  )
  BloodRequest
})






// find blood requests by hospital "Hôpital Ibn Sina"
// find blood requests by bloodTypeNeeded "B+"
// apply filter on blood requests (query selector, ex: http://localhost:5000/api/blood-requests?city=casablanca&bloodTypeNeeded=A-)    


// CREATE
router.post("/", async (req, res) => {
  try {
    const request = await BloodRequest.create(req.body);
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const request = await BloodRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!request) return res.status(404).json({ message: "Not found" });
    res.json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const request = await BloodRequest.findByIdAndDelete(req.params.id);
  if (!request) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
});

module.exports = router;
