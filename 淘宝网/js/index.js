window.addEventListener('load',function(){
    //获取左按钮
    var left =  document.querySelector('.arrow-l');
    //获取右按钮
    var right = document.querySelector('.arrow-r');
    //获取小圆点
    var ol = document.querySelector('.circle');
    //获取大盒子
    var box = document.querySelector('.lun');
    //获取图片的张数
    var ul = box.querySelector('ul');
    //定义一个num来控制图片的偏移量
    var num = 0;
    box.addEventListener('mouseenter',function(){
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    box.addEventListener('mouseleave',function(){
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function(){
            //右按钮点击图片往右移，不能大于图片的张数
             if(num >= ul.children.length -1){
                 num = 0;
             }else{
                 num++;
                 
             }
             position()
         },3000)
    })
    //图片的偏移量
    function position(){
    ul.style.left = (num * -100)  + "%";
       //小圆点的排他
       for(var i = 0; i < ol.children.length; i++){
        if(i == num){
         //当小圆点的索引值等于num 
         ol.children[i].className = 'current';
        }else{
         //不等于
         ol.children[i].className = ''
        }
    }
   
 }
 //遍历li(动态添加小圆点)
 for(var i = 0; i < ul.children.length; i++){
    //动态创建li
    var li = document.createElement('li');
    //给小圆点添加索引值
    li.setAttribute('index',i)
    //把li赋值给ol
    ol.appendChild(li);
    //给小圆点添加点击事件
    li.addEventListener('click',function(){
     num = this.getAttribute('index');
     num = Number(num)  
     position();
    })
    ol.children[0].className = 'current'
}
  //给左右按钮添加点击事件
  left.addEventListener('click',function(){
    //左按钮点击图片往左移，不能小于0
     if(num <= 0){
         num = ul.children.length -1;
     }else{
         num--;
         
     }
     position();
})


right.addEventListener('click',function(){
     //右按钮点击图片往右移，不能大于图片的张数
    if(num >= ul.children.length -1){
        num = 0;
    }else{
        num++;
        
    }
    position()
})

var timer = setInterval(function(){
   //右按钮点击图片往右移，不能大于图片的张数
    if(num >= ul.children.length -1){
        num = 0;
    }else{
        num++;
        
    }
    position()
},3000)

})