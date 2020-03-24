function explode(){
    $(function () {
      $('*[id^="scene"]').each(function () {
          var scene = document.getElementById($(this).attr('id'));
          var parallax = new Parallax(scene);
      });
      });
    }
    setTimeout(explode, 1000); 


    $(".numbox").mask("+7 (999) 999-99-99");


    
  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
      /*
      * 1000 скорость перехода в миллисекундах
      */
    });
  });
