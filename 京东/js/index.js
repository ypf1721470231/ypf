window.addEventListener('load',function(){
    //轮播图
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        parallax : true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
      //时间
      var hour = document.querySelector('.hour');
      var minute = document.querySelector('.minute');
      var second = document.querySelector('.second');
      var num2 =+ new Date("2021-11-30 20:00:00");//指定时间
      getTime();
      //开启定时器
      setInterval(getTime,1000)
      function getTime(){
      var num1 =+ new Date();//现在的时间
      var num = (num2 - num1) / 1000;//总秒数
      var h = parseInt(num / 60 / 60 % 24);//时
      h = h < 10 ? "0" + h :h;
      hour.innerHTML = h;
      var m = parseInt(num / 60 % 60);//分
      m = m < 10 ? "0" + m :m;
      minute.innerHTML = m;
      var s = parseInt(num % 60);//秒
      s = s < 10 ? "0" + s : s;
      second.innerHTML = s;
     
    }
})