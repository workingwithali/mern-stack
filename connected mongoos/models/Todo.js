import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String,
    des: String,
    isDone: { type: Boolean, default: false }
});

export const Todo = mongoose.model('Todo',TodoSchema);