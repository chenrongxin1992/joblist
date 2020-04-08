/**
 *  @Author:    chenrongxin
 *  @Create Date:   2019-6-1
 *  @Description:   题目类别表
 */

    const mongoose = require('mongoose')
    mongoose.Promise = global.Promise;
    //服务器上
    const DB_URL = 'mongodb://xueyuanqiandao:youtrytry@localhost:27017/xueyuanqiandao'
    //本地
    //const DB_URL = 'mongodb://localhost:27017/dxxxhjs'
    mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology: true})//{ useUnifiedTopology: true }

    /**
      * 连接成功
      */
    mongoose.connection.on('connected', function () {    
        console.log('Mongoose connection open to ' + DB_URL);  
    });    

    /**
     * 连接异常
     */
    mongoose.connection.on('error',function (err) {    
        console.log('Mongoose connection error: ' + err);  
    });    
     
    /**
     * 连接断开
     */
    mongoose.connection.on('disconnected', function () {    
        console.log('Mongoose connection disconnected');  
    });   

//var mongoose = require('./db'),
    let Schema = mongoose.Schema,
    moment = require('moment')

//用户
var joblistSchema = new Schema({ 
    jobtitle :{type:String},
    urgency : {type:Number},//紧急程度,1 紧急
    isdone : {type:Number,default:0},//1 完成
    time : {type:String,default:moment().format('YYYY-MM-DD HH:mm')}
},{collection:'joblist'})

exports.joblist = mongoose.model('joblist',joblistSchema)
