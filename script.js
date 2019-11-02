$(document).ready(function () {
  function scrollTop(){
    $("html, body").animate({
      scrollTop: $(document).height() }
      , 1700);
  }
  setTimeout(scrollTop, 1000);
  // background  
  var slides = $('#main_bg div').length - 1;
  var i = 0;
  function changeBg(){
    $('#main_bg div').removeClass("active").eq(i).addClass('active');
    if (i < slides) {
      i ++;
    }
    else {
      i = 0;
    }
  }
  changeBg();
  setInterval(changeBg, 3000);
  // steps 
  $('.show_hide').click(function () {
    $(this).closest('.toggleDiv').hide().next('.toggleDiv').fadeIn();
    scrollTop();
  }
                        );
  /*timer*/
  var countdown = 3 * 60 * 1000;
  var timerId = setInterval(function() {
    countdown -= 1000;
    var min = Math.floor(countdown / (60 * 1000));
    var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
    if (countdown <= 0) {
      clearInterval(timerId);
    }
    else {
      if (sec <= 9) {
        $(".clock").html(min + ":" + "0" + sec);
      }
      else {
        $(".clock").html(min + ":" + sec);
      }
    }
  }
                             , 1000);
}
                  );
