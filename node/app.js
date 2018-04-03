var express=require('express');
var mysql=require('mysql');
var  app=express();
var pool=mysql.createPool({
	host:"localhost",
	user:'root',
	password:"123456",
	database:"luopan",
	port:3306
	
})
app.use('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}
		var sql='select * from dalou limit 0,3';
		
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
			}
			
			
			res.send(data)
			connection.end();
		})
		
	})
})


app.use('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}
		var sql='select * from dalou limit 4,7';
		
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
			}
			
			
			res.send(data)
			connection.end();
		})
		
	})
})



app.use('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}
		var sql='select * from dalou limit 6,9';
		
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
			}
			
			
			res.send(data)
			connection.end();
		})
		
	})
})

app.listen(8000,function(){
	console.log('ok')
})
