// document.oncontextmenu=function(){return false;}; 
document.onselectstart=function(){return false;};

var bodyBgs = [];    //创建一个数组变量来存储背景图片的路径
bodyBgs[0] = "./assets/bg_img/01.webp";
bodyBgs[1] = "./assets/bg_img/02.webp";
bodyBgs[2] = "./assets/bg_img/03.webp";
bodyBgs[3] = "./assets/bg_img/04.webp";
bodyBgs[4] = "./assets/bg_img/05.webp";
bodyBgs[5] = "./assets/bg_img/06.webp";
bodyBgs[6] = "./assets/bg_img/07.webp";
bodyBgs[7] = "./assets/bg_img/08.webp";
bodyBgs[8] = "./assets/bg_img/09.webp";
bodyBgs[9] = "./assets/bg_img/10.webp";
var randomBgIndex = Math.round(Math.random() * 9);//随机数

document.write("<style>body{overflow:hidden;background: url(" + bodyBgs[randomBgIndex] + ") no-repeat center fixed;}<style><style>body{-webkit-background-size: cover;-o-background-size: cover;background-size: cover;}</style>");
document.write("<style>.page-404{position: absolute;top: 50%;left: 50%;transform: translate(-50%, -60%);}</style>");