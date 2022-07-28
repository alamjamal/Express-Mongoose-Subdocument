const mongoose = require('mongoose');

const questionnaire=mongoose.Schema({
    question:{type:String, trim:true, required:true},
    answer:{type:String, trim:true, required:true, default:'not answerd'},
})
const questionnaireModel =  mongoose.model('questionnaire', questionnaire)

const quesDomain=mongoose.Schema({
    domain:{type:String, trim:true, required:true},
    questions:{
        type: [questionnaire],
        required: true,
      }
},
{timestamps:true}
)

const quesDomainModel =  mongoose.model('quesDomain', quesDomain)


//model start with capital letter
module.exports={
    quesDomainModel:quesDomainModel,
    questionnaireModel:questionnaireModel
}

