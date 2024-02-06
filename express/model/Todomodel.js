const mongoose = require("mongoose");
const MONGO_HOST = "mongodb+srv://admin:admin1234@yscluster.y1tyjoy.mongodb.net/TodoList";
//?retryWrites=true&w=majority
mongoose.connect(MONGO_HOST,{
    retryWrites: true,
    w: 'majority',
}).then(resp=>{
    // console.log(resp);
    console.log("DB 연결 성공");
});


const todoSchema = new mongoose.Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }   
});


const Todo = mongoose.model("Todo", todoSchema); //모델 생성

module.exports = Todo;