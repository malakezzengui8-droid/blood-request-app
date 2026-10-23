const mongoose = require("mongoose");

// Matches the BloodRequest class diagram.
// "id" is created automatically by MongoDB as "_id".
// "createdAt" is created automatically by the timestamps option.
const bloodRequestSchema = new mongoose.Schema(
  {
   bloodTypeNeeded: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    city: { type: String, required: true },
    hospital: { type: String, required: true },
    reason: { type: String, required: true },
    status: {
      type: String,
      // sts deve essrer per forza di questo tipo
      enum: ["DRAFT", "PUBLISHED", "FULFILLED", "CANCELLED"],
      // se non viene specificato lo status, di default sarà DRAFTdi default 
      default: "DRAFT",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);

