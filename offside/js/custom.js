// Add your custom JS code here
$(document).ready(function() {

/*============= Type js ===================*/
  $(window).load(function(){
    $(".h1-text").typed({
        strings: ["Sign Up for Free"],
        typeSpeed: 80,
        showCursor: true,
         backDelay: 500,
        callback: function () {
            $(".h1-text").typed({
              // give others some constructive criticism
                strings: ["Build your Profile"],
                typeSpeed: 50,
                showCursor: false,
                callback: function () {

                    $(".h1-text").typed({
                        strings: ["Start Voting and Enjoy"],
                        typeSpeed: 50,
                        showCursor: false,
                    });
                }
            })
        },
      });
  });



/*=============== substring for long text  ====================*/
  $(".str-cut").each(function (i) {
          var len = $(this).text().length;
          if (len > 80) {
              $(this).text($(this).text().substr(0, 150) + '......');
          }
      });



/*============ Enable file input plugin =============*/
  // initialize with defaults
  $("#input-id").fileinput();

/*========= Notification  =================*/


  /**** This Code for Display Notification at all ******/

  $('.notification').css('display', 'none');

  // This Code for Handle Closing Icon to dismiss Notification
  $('#notify-close').click(function(){

      $(this).parents('.notification').fadeOut(500);

  });

/*========= Adjust the carusel in home page =============*/
    $('.carousel').carousel({
    interval: 2000
  });


/*==================== Navbar =====================*/

    if($(document).scrollTop() > 50){
        $(".index-navbar").addClass('new-nav');
    }

    // When user Scroll to bottom

    $(window).scroll(function(){

        if($(document).scrollTop() > 50){
            $(".index-navbar").addClass('new-nav');
            //$('nav').removeClass('index-navbar');
        }else{
            $('.index-navbar').removeClass('new-nav');
            //$('nav').addClass('index-navbar');
        }

    });


/*========== Swap between Login and Register in Modal / Start =================*/

/* Remove each [header] word */
  $('.modal .btn-login .log').addClass('run');
  $('#modal-register').css('display', 'none');

  $('.modal  .btn-login .reg').click(function(){
        $('.modal .btn-login .log').removeClass('run');
        $(this).addClass('run');
        $('.modal #modal-login').fadeOut(100);
        $('.modal #modal-register').fadeIn(200);
  });

  $('.modal .btn-login .log').click(function(){

        $('.modal .btn-login .reg').removeClass('run');
        $(this).addClass('run');
        $('.modal #modal-register').fadeOut(100);
        $('.modal #modal-login').fadeIn(200);

  });

/*========== Swap between Login and Register in Modal / End  =================*/


/*================ POSTS Page Script ==================*/


    $('.card').hover(function() {
        $(this).find('.card-hidden').slideDown(300);
    });

    $('.card').mouseleave(function() {
        $(this).find('.card-hidden').slideUp(300);
    });

// Open Image in Modal

// Get the modal
var modal_img = document.getElementById('Modal-image');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption-img");
$('.myImg-modal').click(function(){
      modal_img.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
});

// When the user clicks on <span> (x), close the modal

$('.close-btn-modal').click(function(){
    modal_img.style.display = "none";
});


/*======== Open Cooment Box when click on Comment button */
$('.comment-article').click(function(){
    $('.add-article-comment').fadeToggle(500);
});

/*======== Open Reply Box when click on reply icon */

$('.rep-comment').click(function(){

      var replyBox = $(this).parents('.comment-main-level').siblings('.reply-list').children('.reply-box'),
        scrollTo = $(this).attr('data-href');

      $('html, body').animate({
        scrollTop: $(scrollTo).offset().top + 500
      }, 500);
       replyBox.fadeToggle();
       replyBox.find('textarea[name=reply-area]').focus();
})

/*================ Edit Comment  ================*/
$('.edit-comment').click(function() {
  /* Act on the event */
    $(this).parents('.comment-head').siblings('.input-edit').fadeIn();
    var comment = $(this).parents('.comment-head').siblings('.comment-content').text();
    $(this).parents('.comment-head').siblings('.input-edit').find('textarea[name=edit-comment]').val(comment);
});

/*=========== Now call the Owl initializer function and your carousel is ready. ===========*/
$(".owl-carousel").owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots: false
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});



/*=== Changed Starts Color by User ========*/

// Set Default for first three stars
/* Edited at 7/4-2017 */
$('label.star-1, label.star-2, label.star-3').addClass('default');
/* End Edited at 7/4-2017 */

// Change color if checked
$('input.star').change(function() {

         if ($(this).is(':checked')) {

           /* Edited at 7/4-2017 */
           $('label.star-1, label.star-2, label.star-3').removeClass('default');
           /* End Edited at 7/4-2017 */

             $(this).nextAll().addClass('changed');

         }

   });


   // if user choose The fivth star
   $('input.star').change(function() {
         if ($(this).is(':checked')) {
             $(this).nextAll('label.star').addClass('star5');
         }
   });

   // Close Survey Box

   $('#close-survey').click(function(){

        if($(this).parents('.survey').attr('data-case') === 'open')
        {
          $(this).parents('.survey').css('height', '50px');

          $(this).parents('.survey').attr('data-case', 'close');

          $(this).children('i').removeClass().addClass('fa fa-plus');
        }
        else if($(this).parents('.survey').attr('data-case') === 'close')
        {
            $(this).parents('.survey').css('height', '400px');
            $(this).parents('.survey').attr('data-case', 'open');
            $(this).children('i').removeClass().addClass('fa fa-minus');

        }


   });


});


/*============ Rsultin Page ================*/



// Change background for each Player based on his Feedback
// less than 3 => background-color: red
// less than 5 & large than 3 => background-color: yellow
// less than 8 & large than 5 => background-color: blue
// less than 5 & large than 8 => background-color: green

$('.voting-results ul li .player-name-link').click(function(){

  if($(this).hasClass('yellow-color'))
  {
    $(this).find('.player-name').removeClass('yellow-color');
  }
  else {
      $(this).find('.player-name').addClass('yellow-color');
  }

});

var playersList = $('.results-page .panel .result-section .voting-results ul li');


playersList.each(function(){

    var playerbadge = $(this).find('.voting-number');
    var playervalue = $(this).find('.voting-number').text();
    var playerName = $(this).find('.player-name').text();

    // in case : Player name is Super Large, then substring
    if(playerName.length > 15)
    {
        $(this).find('.player-name').text(playerName.substr(0, 15));
        //$(this).text($(this).text().substr(0, 150) + '......');
    }

    if(playervalue <= 3) {
        playerbadge.css('background-color', '#e01a22');
    }
    else if(playervalue <= 5 && playervalue > 3)
    {
        playerbadge.css('background-color', '#8a920b');
    }
    else if(playervalue <= 8 && playervalue > 5)
    {
        playerbadge.css('background-color', '#0f0fdc');
    }
    else if(playervalue <= 10 && playervalue > 8)
    {
        playerbadge.css('background-color', '#089a08');
    }

});



/*================= Chart js ===============*/

  var ctx = $("#playerChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
        datasets: [{
            label: "",
            data: [3, 5, 2, 14, 33, 10, 12, 10, 8, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
          display: true,
          text: "Voting info.",
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true,
    }
});

  var ctx2 = $("#playerChart2");
  var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
        datasets: [{
            label: 'player',
            data: [3, 5, 2, 14, 33, 10, 12, 10, 8, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
          display: true,
          text: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        responsive: true,
    }
});
