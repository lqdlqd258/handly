<!--  -->
<template>
  <div style="font-size:22px;">
      <article class="wwdc">
    <span class="spin">
      <!-- Large Circles -->
      <div class="large circle one"></div>
      <div class="large circle two"></div>
      <div class="large circle three"></div>
      <div class="large circle four"></div>
      <div class="large circle five"></div>
      <div class="large circle six"></div>
      <div class="large circle seven"></div>
      <div class="large circle eight"></div>
    </span>
    <span class="pulse">
      <!-- Small Shapes -->
      <div id="" class="small circle one"></div>
      <div id="" class="small squircle two"></div>
      <div id="" class="small circle three"></div>
      <div id="" class="small squircle four"></div>
      <div id="" class="small circle five"></div>
      <div id="" class="small squircle six"></div>
      <div id="" class="small circle seven"></div>
      <div id="" class="small squircle eight"></div>
    </span>
    <span class="move">
      <!-- Move Shapes -->
      <div id="x1" class="smalls circles ones"><p>E</p></div>
      <div id="x2" class="smalls squircles twos "><p>D</p></div>
      <div id="x3" class="smalls circles threes "><p>E</p></div>
      <div id="x4" class="smalls squircles fours "><p>T</p></div>
      <div id="x5" class="smalls circles fives "><p>A</p></div>
      <div id="x6" class="smalls squircles sixs "><p>C</p></div>
      <div id="x7" class="smalls circles sevens "><p>I</p></div>
      <div id="x8" class="smalls squircles eights "><p>L</p></div>
      <h1 id="img-hidden"><img src="__STATIC__/media/image/login/welcome.svg" style="width: 400px;height: 50px;"></h1>
    </span>
      <!-- Squircles -->
       <span class="spin-reverse">
        <div class="large squircle one"></div>
        </span>
            <div class="large squircle two spin-login">
        <div class="content contentloginform">
        <h1>Welcome</h1>
        <form class="form" autocomplete="off">
	    	<input type = 'text' style="display:none;"/>
	    	<!-- <i class="fa fa-user useri"></i><i class="fa fa-lock paswodi" style="cursor: pointer;"></i>
	    	<i class="fa fa-times success" style="display: none;" ></i>
	    	<i class="fa fa-times error" style="display: none;" ></i> -->
			<!-- 自动填充解决方案 -->
			<input type="text" name="name" value="admin" style="position: absolute;z-index: -1;" disabled autocomplete = "off"/><!-- 这个username会被浏览器记住，我随便用个admin-->
			<input type="password" name="pwd" value=" " style="position: absolute;z-index: -1;" disabled autocomplete = "off"/><!-- 这前面两个name属性要不要和真正的一样，具体自己调试下 -->

            <input type="text" placeholder="username" class="myuname" autocomplete="off" v-model="userName" disableautocomplete>
            <input type="password" placeholder="password" class="mypassword" v-model="userPwd" autocomplete="new-password" disableautocomplete>

        </form>
         	<button id="login-button" @click="login">登录</button>
            <button id="login-zc">注册</button>
            </div>
          </div>  
  </article>
  <p class="message" style="font-size: 20px;font-weight: 600;">Copyright ©2018 All rights are owned by <br>Ningbo Handly Communication Technology Co., Ltd.<br><a href="//cssanimation.rocks/courses/animation-101/" target="_blank" style="font-size: 20px;">
</a></p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userName:'',
      userPwd:'',
      Tip:false
    };
  },
  methods:{
    login(){
        // axios.post('',{
        //   userName:this.userName,
        //   userPwd:this.userPwd
        // }).then((res)=>{
        //   let res = res.data;
            //  this.$router.push({name:"index"})
        // });
        console.log(this.userName,this.userPwd);
    }
  }
}

</script>
<style lang='scss' scoped>
 @import '../../assets/css/login/login.css';
 @import '../../assets/css/login/loginpop.css';
</style>