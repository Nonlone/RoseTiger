/**
  Index Script
*/
$(document).ready(function(){
	//render hook

	//scroll one page
  $(".main").onepage_scroll({
   	sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
  	easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  	animationTime: 1000, // AnimationTime let you define how long each section takes to animate
   	pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
   	updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.   		
   	loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  	responsiveFallback: 600 // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
  });

  //control-box
  $(".controller").hover(function(){

    $(".controller").css("background","#808080");

    $(this).css("background","#ffffff").prev("p").fadeIn(100);

    if ($(this).is("#go_home")){
        $("#text_home").show();
    }
    else if ($(this).is("#go_work")){
        $("#text_work").show();
    }
    else if ($(this).is("#go_about")){
        $("#text_about").show();
    }
    else if ($(this).is("#go_contact")){
        $("#text_contact").show();
    }
    
  });

  $(".controller").mouseleave(function(){
      $(".btn-text").fadeOut(100);
  });


  //发Email
  $("#sendmail").click(function(){
      var name = $("#name").val();
      var email = $("#email").val();
      var text = $("#text").val();
      $(this).attr("href","mailto:team@rose-tiger.com?subject=Re:标题&body="+name + email +text);
  });

});