window.addEventListener('load',function(){
    //获取大盒子
    var focus = document.querySelector('.lifeservice');
    //获取图片的张数
    var img = focus.querySelector('ul');
    //获取小圆点
    var redu = document.querySelector('.redu');
    //定义一个图片的偏移量
    var nui = 0;
    focus.addEventListener('mouseenter',function(){
          clearInterval(time);
          time = null;
    })
    focus.addEventListener('mouseleave',function(){
        time = setInterval(function(){
            //右按钮点击图片往右移，不能大于图片的张数
             if(nui >= img.children.length -1){
                 nui = 0;
             }else{
                 nui++;
                 
             }
             pos()
         },3000)
    })
    //图片的偏移量
    function pos(){
        img.style.left = (nui * -100) + "%";
        for(var i = 0; i < redu.children.length;i++){
            if(i == nui){
                redu.children[i].className = 'current';
            }else{
                //不等于
                redu.children[i].className = ''
            }
        }
    }
     //遍历li(动态添加小圆点)
  for(var i = 0; i < img.children.length; i++){
    //动态创建li
    var li = document.createElement('li');
    //给小圆点添加索引值
    li.setAttribute('index',i)
    //把li赋值给ol
    redu.appendChild(li);
    //给小圆点添加点击事件
    li.addEventListener('click',function(){
     nui = this.getAttribute('index');
     nui = Number(nui)  
     pos();
    })
    redu.children[0].className = 'current'
}
var time = setInterval(function(){
    //右按钮点击图片往右移，不能大于图片的张数
     if(nui >= img.children.length -1){
         nui = 0;
     }else{
         nui++;
         
     }
     pos()
 },3000)

 //底部轮播图
 //获取左右按钮
 var left_l = document.querySelector('.left-l');
 var right_r = document.querySelector('.right-r');
 //获取大盒子
 var zox =  document.querySelector('.tanx-wrapper');
 //获取图片的张数
 var  u = zox.querySelector('ul');
 //定义一个图片偏移量
 var pum = 0;
 zox.addEventListener('mouseenter',function(){
    left_l.style.display = 'block';
    right_r.style.display = 'block';
    clearInterval(timet);
    timet = null;
})
zox.addEventListener('mouseleave',function(){
    left_l.style.display = 'none';
    right_r.style.display = 'none';
    timet = setInterval(function(){
        //右按钮点击图片往右移，不能大于图片的张数
         if(pum >= u.children.length -1){
             pum = 0;
         }else{
             pum++;
             
         }
         pume()
     },3000)
})
  //图片的偏移量
  function pume(){
    u.style.left = (pum * - 100)  + "%";
 }
 left_l.addEventListener('click',function(){
     //左按钮点击图片往左移，不能小于0
     if(pum <= 0){
        pum = u.children.length -1;
    }else{
        pum--;
        
    }
    pume();
 })
 right_r.addEventListener('click',function(){
    //右按钮点击图片往右移，不能大于图片的张数
    if(pum >= u.children.length -1){
        pum = 0;
    }else{
        pum++;
        
    }
    pume()
})
var timet = setInterval(function(){
    //右按钮点击图片往右移，不能大于图片的张数
     if(pum >= u.children.length -1){
         pum = 0;
     }else{
         pum++;
         
     }
     pume()
 },3000)
})