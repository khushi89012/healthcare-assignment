const mongoose = require("mongoose")


const NoticeSchema = new mongoose.Schema({
    notice:{type:String,require:true},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User", require:true},
    date:{type:Date,require:true},
}
,{
    timestamps:true,
    versionKey:false


})

module.exports = mongoose.model("notice",NoticeSchema)