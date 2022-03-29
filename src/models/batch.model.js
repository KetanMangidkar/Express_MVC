const mongoose = require("mongoose");
//Batch :- has fields like Batch name, createdAt, updatedAt

const batchSchema = new mongoose.Schema({

    BatchName: { type: String, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "student", required: true },

},
    {
        versionKey: false,
        timestamps: true,
    }
);

const Batch = mongoose.model("batch", batchSchema);

module.exports = Batch;