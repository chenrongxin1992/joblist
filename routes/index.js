var express = require('express');
var router = express.Router();
const joblist = require('../db/add_db').joblist
const shangan = require('../db/add_db').shangan
const async = require('async')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '工作列表' });
}).get('/yy',function(req,res){
	res.render('yy',{title:'薄迎迎'})
})
router.post('/add_joblist',function(req,res){
	console.log('urgency--->',req.body.urgency)
	let newjoblist = new joblist({
			jobtitle:req.body.jobtitle,
			urgency:req.body.urgency
		})
		newjoblist.save(function(err){
			if(err){
				return res.json({'code':-1,'msg':err})
			}
			return res.json({'code':0,'msg':'success'})
		})
	
})
router.get('/tb_list',function(req,res){
	let page = req.query.page,
		limit = req.query.limit
	page ? page : 1;//当前页
	limit ? limit : 15;//每页数据
	let total = 0
	console.log('page limit',page,limit)
	async.waterfall([
		function(cb){
			//get count
			let search = joblist.find({'isdone':0}).count()
				search.exec(function(err,count){
					if(err){
						console.log('joblist get total err',err)
						cb(err)
					}
					console.log('joblist count',count)
					total = count
					cb(null)
				})
		},
		function(cb){
			let numSkip = (page-1)*limit
			limit = parseInt(limit)
				console.log('不带搜索参数')
				let search = joblist.find({'isdone':{'$ne':'1'}})
					search.sort({'urgency':-1})//正序
					search.sort({'_id':-1})
					//search.where('beizhu').equals('0')
					search.limit(limit)
					search.skip(numSkip)
					search.exec(function(error,docs){
						if(error){
							console.log('joblist error',error)
							cb(error)
						}
						cb(null,docs)
					})
		}
	],function(error,result){
		if(error){
			console.log('joblist async waterfall error',error)
			return res.json({'code':-1,'msg':err.stack,'count':0,'data':''})
		}
		console.log('joblist async waterfall success')
		return res.json({'code':0,'msg':'获取数据成功','count':total,'data':result})
	})
}).post('/joblist_del',function(req,res){
	console.log('id',req.body.id)
	joblist.deleteOne({'_id':req.body._id},function(error){
		if(error){
			console.log('delete error',error)
			return res.json({'code':-1,'msg':error})
		}
		console.log('delete success')
		return res.json({'code':0,'msg':'delete success'})
	})
}).post('/joblist_done',function(req,res){
	let obj = {	isdone:1 }
	joblist.updateOne({_id:req.body._id},obj,function(error){
		if(error){
			console.log('changeagency error',error)
			return res.json({'code':1,'msg':error})
		}
		console.log('changeagency success')
		return res.json({'code':0})		
	})
}).post('/change_agency',function(req,res){
	console.log(req.body.urgency,'------------------------------',req.body._id)
	let obj = {	urgency:req.body.urgency }
	joblist.updateOne({_id:req.body._id},obj,function(error){
		if(error){
			console.log('changeagency error',error)
			return res.json({'code':1,'msg':error})
		}
		console.log('changeagency success')
		return res.json({'code':0})		
	})
})
router.get('/tb_list_done',function(req,res){
	let page = req.query.page,
		limit = req.query.limit
	page ? page : 1;//当前页
	limit ? limit : 15;//每页数据
	let total = 0
	console.log('page limit',page,limit)
	async.waterfall([
		function(cb){
			//get count
			let search = joblist.find({'isdone':1}).count()
				search.exec(function(err,count){
					if(err){
						console.log('joblist get total err',err)
						cb(err)
					}
					console.log('joblist count',count)
					total = count
					cb(null)
				})
		},
		function(cb){
			let numSkip = (page-1)*limit
			limit = parseInt(limit)
				console.log('不带搜索参数')
				let search = joblist.find({'isdone':1})
					search.sort({'urgency':-1})//正序
					//search.where('beizhu').equals('0')
					search.limit(limit)
					search.skip(numSkip)
					search.exec(function(error,docs){
						if(error){
							console.log('joblist error',error)
							cb(error)
						}
						cb(null,docs)
					})
		}
	],function(error,result){
		if(error){
			console.log('joblist async waterfall error',error)
			return res.json({'code':-1,'msg':err.stack,'count':0,'data':''})
		}
		console.log('joblist async waterfall success')
		return res.json({'code':0,'msg':'获取数据成功','count':total,'data':result})
	})
})
router.get('/jobrecord',function(req,res){
	console.log('_id----->',req.query._id)
	let search = joblist.findOne({})
		search.where('_id').equals(req.query._id)
		search.exec(function(err,doc){
			if(err){
				console.log('err',err)
				return res.json(err)
			}
			return res.render('jobrecord',{'doc':doc})
		})
}).post('/jobrecord',function(req,res){
	let obj = {
		jobtitle:req.body.jobtitle,
		jobrecord:req.body.jobrecord
	}
	console.log('obj--->',obj)
	joblist.updateOne({'_id':req.body._id},obj,function(updateerr){
		if(updateerr){
			console.log('updateerr--->',updateerr)
			return res.json({'code':-1,'msg':updateerr})
		}
		return res.json({'code':0,'msg':'success'})
	})
})
//上岸
router.get('/addshangan', function(req, res, next) {
	res.render('addshangan', { title: '上岸资料'});
}).post('/addshangan',function(req,res){
	let newshangan = new shangan({
			title:req.body.title,
			shangan:req.body.shangan
		})
		newshangan.save(function(err){
			if(err){
				return res.json({'code':-1,'msg':err})
			}
			return res.json({'code':0,'msg':'success'})
		})
})
router.get('/shanganziliao', function(req, res, next) {
	let search = shangan.findOne({})
		search.exec(function(err,doc){
			if(err){
				return res.json(err)
			}
			if(!doc){
				res.render('shanganziliao', { title: '上岸资料','doc':null});
			}
			res.render('shanganziliao', { title: '上岸资料','doc':doc});
		})
})
router.get('/shanganlist',function(req,res){
	let search = shangan.find({})
		search.sort({'title':-1})
		search.exec(function(err,docs){
			if(err){
				return res.json(err)
			}
			if(docs.length == 0){
				res.render('addshangan', { title: '上岸资料','docs':docs});
			}
			res.render('shanganlist', { title: '上岸资料','docs':docs});
		})
}).get('/editshangan',function(req,res){
	let search = shangan.findOne({})
		search.where('_id').equals(req.query._id)
		search.exec(function(err,doc){
			if(err){
				return res.json(err)
			}
			res.render('editshangan', { title: '上岸资料','doc':doc});
		})
}).post('/editshangan',function(req,res){
	let obj = {
		title:req.body.title,
		shangan:req.body.shangan
	}
	console.log('obj--->',obj)
	shangan.updateOne({'_id':req.body._id},obj,function(updateerr){
		if(updateerr){
			console.log('updateerr--->',updateerr)
			return res.json({'code':-1,'msg':updateerr})
		}
		//test
		return res.json({'code':0,'msg':'success'})
	})
}).post('/deletelist',function(req,res){
	shangan.deleteOne({'_id':req.body._id},function(error){
		if(error){
			return res.json({'code':-1,'msg':error})
		}
		return res.json({'code':0,'msg':'success'})
	})
})
module.exports = router; 
