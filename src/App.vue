<template>
  <div id="app">

  	<div class="logo">
  		<div class="logo-1">
  			<img src="../img/logo.png"/>
  		</div>
  		
  	</div>
  	
    <div id="nav">
			<ul>
				<li><router-link to="/">首页</router-link></li>
				<li><router-link to="/about">全新楼盘</router-link></li>
				<li><router-link to="/erji">二手楼盘</router-link></li>
				<li> <router-link to="/quanx">全新商铺</router-link></li>
				<li><router-link to="/dongt">楼市动态</router-link></li>
				<li><router-link to="/lianx">联系我们</router-link></li>
			</ul>
			  </div>
       <div class="ph">
       	<div class="ph-con">
       	
       		<p>008-6666 6666</p>	<a href="#">咨询电话</a>
       	
       	</div>
       	
       </div>
      <div class="clear"></div>
      
    <div class="banner">
      	<img src="../img/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS9kODI5YzJiMjZiYjc0MmViNmQ1NWZiOTc4ZWEwODU4YS0xODAweDYwMC5qcGc_p_p100_p_3D.jpg" alt="" />
      	
      </div>
    
   <div class="main">
      	
      	<div class="main-left">
      		<div class="left-con1">
      			<a href=""><img src="../img/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8zNTMyOGMwMzgzNDcxMjYzYjFjMzYzNThjYjVjOTc3OC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" /></a>
      			<a href=""><img src="../img/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xZWM4Yzg2ODQ5MjVkMDVhODc4MDg4M2JhYzQxOThmOC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" /></a>
      			<a href=""><img src="../img/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8yMmEyZTgzODY3ZDk2MzU3ZDA2YWU1N2VmYjE1NzNiZC00NzR4MTYxLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" /></a>
      			<a href=""><img src="../img/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xODUxNThhNTMyNzA3OTcwMDM0ZjUwZDFkZjAyMGQxZi02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" /></a>
      		</div>
      		<div class="left-con2" >
      			<h1></h1>
      			<h4></h4>
      			<div class="con2-con1" v-for="i in arr">
      				
      			<a href="">{{i.img}}</a>
      			<h3>{{i.tit}}</h3>
      			<p>{{i.diqu}}</p>
      			<p>{{i.hux}}</p>
      			<p>{{i.jiage}}</p>
      			</div>
      			
      			<a href="">浏览更多新楼盘</a>
      			
      			
      		</div>
      		<div class="left-con3">
      			<h1></h1>
      			<h4></h4>
      			<div class="con3-con1"  v-for="i in arr">
      				<a href="">{{i.img}}</a>
      			<h3>{{i.tit}}</h3>
      			<p>{{i.diqu}}</p>
      			<p>{{i.hux}}</p>
      			<p>{{i.jiage}}</p>
      			</div>
      			
      			
      			<a href="">浏览更多商铺</a>
      		</div>
      		<div class="left-con4">
      			<h1></h1>
      			<h4></h4>
      			<div class="con4-con1" v-for="i in arr">
      				<a href="">{{i.img}}</a>
      			<h3>{{i.tit}}</h3>
      			<p>{{i.diqu}}</p>
      			<p>{{i.hux}}</p>
      			<p>{{i.jiage}}</p>
      			</div>
      			
      		</div>
      		<a href="">浏览更多二手楼盘</a>
      		
      		
      		
      		
      	</div>
      	<div class="main-right">
      		<div class="right-con">
      			<h1></h1>
      			<a href="">阅读更多</a>
      			<div class="right-con1">
      				<h4></h4>
      				<p></p>
      			</div>
      			<div class="right-con2">
      				<h4></h4>
      				<p></p>
      			</div>
      			<div class="right-con3">
      				<h4></h4>
      				<p></p>
      			</div>
      			<div class="right-con4">
      				<h4></h4>
      				<p></p>
      			</div>
      			<div class="right-con5">
      				<h4></h4>
      				<p></p>
      			</div>
      			<div class="right-con6">
      				<h4></h4>
      				<p></p>
      			</div>
      		</div>
      		
      	</div>
      	<div class="clear"></div>
      </div>
    <router-view/>
  </div>


</template>
<script>

	export default {
		data(){
			return{
				
				arr:[],
			
				
			}
			
		},
		created(){
			this.$http.get("http://localhost:8000",{emulateJSON:true}).then(e=>this.arr=e.body)
			
		},
		created(){
			this.$http.get("http://localhost:8000",{emulateJSON:true}).then(e=>this.arr=e.body)
			
		},
		created(){
			this.$http.get("http://localhost:8000",{emulateJSON:true}).then(e=>this.arr=e.body)
			
		}
		}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
		color: black;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
#nav {
  padding-top: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 14px;
}

#nav a.router-link-exact-active {
  
}


.logo{
	width: 25%;
	float: left;
}
#nav{
	width: 80%;
}
#nav ul{
	width: 100%;
}
#nav ul li{
	float: left;
	margin-right: 50px;
	height: 35px;
	
}
#nav ul li:nth-child(1){
	border-bottom: 1px solid #000000;
}
#nav ul li:hover{
	border-bottom: 1px solid  #000000;
}
#nav ul li:nth-child(6){
	margin-right: 120px;
}
.ph{
	width: 20%;float: left;
}
.ph-con{
	float: left;
	
}
.ph-con img{
	float: left;
}
.ph-con p{
	float: left;
}
.ph-con a{
	float: left;
	width: 100px;height: 35px;border-radius: 10px;background:#3A79E8 ;
	color: white;
line-height: 35px;
margin-top: -10px;
margin-left: 20px;
font-weight: bold;
	text-align: center;
	
	
}


#app .clear{
	clear: both;
}




.banner{
	width: 100%;
	margin-top: 20px;
}
.banner img{
	width: 90%;
	
	
}

.main{
	width: 100%;
}
.main .main-left{
	width: 80%;
	float: left;
	
}
.main-right{
	width: 20%;
	background: #F7F7F7;
	margin-top: 100px;
	margin-left: -200px;
	float: left;
	
}
.main .main-left .left-con1{
	width: 80%;
	margin-top: 100px;
	margin-left: 20px;
}
.main .main-left .left-con1 img{
	width: 45%;
}
.left-con1 img:nth-child(1){
	width: 40%;
	margin-right: 10px;
	margin-bottom: 10px;
}



</style>
