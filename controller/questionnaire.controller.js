const express = require('express')
const qusRoute=express.Router()
const {quesDomainModel} = require('../models/questionnaire.model')
const {questionnaireModel} = require('../models/questionnaire.model')
qusRoute.get(`/domain`, async (req,res)=>{
    // Questionire.find()
    // .then(findQuestion=>res.status(201).json(findQuestion))
    // .catch(err=>res.status(500).json({"error": err}))
    const findQuestion = await quesDomainModel.find();
    if(!findQuestion) res.status(500).json({"error":"no product find"})
    res.status(200).json(findQuestion)
})


qusRoute.post(`/domain`, (req,res)=>{

    const questionnaire=new quesDomainModel({
        domain: req.body.domain,
        questions: req.body.questions
    })
    questionnaire.save()
    .then(createdQuesions=>{
        res.status(201).json(createdQuesions)
    })
    .catch(err=>res.status(500).json({'error':err}))
})


qusRoute.post(`/ques`, (req,res)=>{

    const questionnaire=new questionnaireModel({
        question: req.body.question,
        answer: req.body.answer
    })
    questionnaire.save()
    .then(createdQuesions=>{
        res.status(201).json(createdQuesions)
    })
    .catch(err=>res.status(500).json({'error':err}))
})


module.exports=qusRoute