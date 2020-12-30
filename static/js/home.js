$(function() {
  $(".typed").typed({
    strings: [
      "stat justin.human<br/>" + 
      "><span class='caret'>$</span> skills: C++, Python, PostgreSQL, HTML, CSS, JavaScript<br/> ^100" +
      "><span class='caret'>$</span> projects:<a href='https://github.com/justinwoo97/portfolio_website'>Personal Website</a>, <a href='https://github.com/sai-cs-stud/NJLegisAnalysis'>NJ gerrymandering</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: football (Patrick Mahomes == Goat), travel <br/> ^300" +
      "><span class='caret'>$</span> current work:  <a href='https://github.com/shantanu/smart-box'>maestro-smartbox</a><br/>"
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
