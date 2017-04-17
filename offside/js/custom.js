// Add your custom JS code here
$(document).ready(function() {

  $(".str-cut").each(function (i) {
          var len = $(this).text().length;
          if (len > 80) {
              $(this).text($(this).text().substr(0, 180) + '......');
          }
      });


/*========= Adjust the carusel in home page =============*/
    $('.carousel').carousel({
    interval: 2000
  });


/*========== Swap between Login and Register in Modal / Start =================*/
/* Edited at 7/4-2017 */
/* Remove each [header] word */

  $('.modal-navbar .btn-login .log').addClass('run');
  $('.modal-navbar #modal-register').css('display', 'none');

  $('.modal-navbar .btn-login .reg').click(function(){
        $('.modal .btn-login .log').removeClass('run');
        $(this).addClass('run');
        $('.modal #modal-login').css('display', 'none');
        $('.modal #modal-register').css('display', 'block');
  });

  $('.modal-navbar .btn-login .log').click(function(){

        $('.modal .btn-login .reg').removeClass('run');
        $(this).addClass('run');
        $('.modal #modal-register').css('display', 'none');
        $('.modal #modal-login').css('display', 'block');

  });

/*========== Swap between Login and Register in Modal / End  =================*/


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
    $('.add-article-comment textarea').focus();
});

/*======== Open Reply Box when click on reply icon */

$('.rep-comment').click(function(){
      $(this).parents('.comment-main-level').siblings('.reply-list').children('.reply-box').fadeToggle();
      $(this).parents('.comment-main-level').siblings('.reply-list').children('.reply-box').find('form textarea').focus();
})


/*=========== Now call the Owl initializer function and your carousel is ready. ===========*/
$(".owl-carousel").owlCarousel({
  loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
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


});

window.onload = function(){

    $('.type_text1').typed({

        strings : ['Offside', '500 Users', '2000 Comments', '200 Articles', '120 Clubs'],
        typeSpeed : 60,
        showCursor : true,
        cursorChar : "|",
        loop : true,
        backDelay : 500

    });

};
