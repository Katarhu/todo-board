import mongoose, {Types} from "mongoose";

export const BoardSchema = new mongoose.Schema({
        userId: {type: String, required: true},
        name: {type: String, required: true},
        description: {type: String},
        lists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}]
    },
    {timestamps: true}
)

export interface IBoard extends mongoose.Document {
    userId: Types.ObjectId
    name: string;
    description: string;
    createdAt: string;
    lists: Types.ObjectId[]
}
