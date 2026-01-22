import { model, Schema, type ObjectId } from "mongoose";

interface IClass{
    className: string, 
    teacherId: ObjectId,
    studentIds: ObjectId[]

}

const classSchema = new Schema<IClass>({
    className: { type: String, required: true
    },
    teacherId: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    studentIds:[{
        type: Schema.Types.ObjectId, 
        ref: "User",
        default: []
      
    }]
})

const Class = model<IClass>("Class", classSchema);

export default Class;