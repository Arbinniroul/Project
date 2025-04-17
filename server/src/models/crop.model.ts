import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the crop schema
const cropSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String, // URL to the crop image
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        growthFactors: {
            soilType: {
                type: String,
                required: true,
            },
            waterRequirements: {
                type: String,
                required: true,
            },
            temperature: {
                type: String,
                required: true,
            },
            fertilizers: {
                type: [String], // List of fertilizers
                required: true,
            },
        },
        suitableMonths: {
            type: [String], // List of months when the crop is suitable for planting
            required: true,
        },
        alternativeCrops: [
            {
                type: Schema.Types.ObjectId, // Reference to other crops in the system
                ref: "Crop",
            },
        ],
        customerTrends: {
            mostSold: {
                type: Boolean, // Flag to indicate if it's a popular crop in the current month
                default: false,
            },
            marketValue: {
                type: Number, // Average market value of the crop
            },
        },
    },
    { timestamps: true }
);

// Create the model
export const Crop = mongoose.model("Crop", cropSchema);
