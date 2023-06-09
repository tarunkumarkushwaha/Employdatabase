const express = require("express")
const { default: mongoose } = require("mongoose")
const {Schema} = mongoose
const mangoose = require("mongoose")

const empschema = new Schema(
    {
        employeename:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        department:{
            type:String,
            required:true
        },
        employeestatus:{
            type:String,
            required:true
        }
    }
)

// creation of new collection 
const Empdata = mangoose.model("Empdata", empschema)

module.exports = Empdata ;