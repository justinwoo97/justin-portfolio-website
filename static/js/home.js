$(function() {
  $(".typed").typed({
    strings: [
      "stat justin ding<br/>",
      "><span class='caret'>$</span> skills: python<br/> ^100" ,
      "><span class='caret'>$</span> job: android auto at <a href='http://www.google.com/'>Google Munich</a><br/> ^100" ,
      "><span class='caret'>$</span> hobbies: football, travel, <a href='http://www.rish.space/blog'>writing</a><br/> ^300" ,
      "><span class='caret'>$</span> alias: crearo <br/>" ,
      "><span class='caret'>$</span> highlight<br/>",
      "<span class='caret'>$</span> Best moment in my life<br/>",
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
