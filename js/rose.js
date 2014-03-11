$(document).ready(function(){
    //ABOUT TEAM

   $(".panel-heading, .team-head").click(function(){
        if (!$(this).prev("div").hasClass("in")){
            $(this).parent().parent().animate({marginTop:"-50px"});
            playThumb($(this).parent().prev().prev().prev("div"));
        }
        else{
            $(this).parent().parent().animate({marginTop:"50px"});
            resetThumb($(this).parent().prev().prev().prev("div"));

        }
    })
})



var thumbStep = 7;
var thumbSpeedChange = 140 / thumbStep;

function playThumb($thumb, step){
    setTimeout(function(){
        step = step === undefined ? 0 : step;
        $thumb.css('backgroundPosition', '0px -' + (146 * step)  + 'px');
        if (step + 1 < thumbStep){
            playThumb($thumb, step + 1);
        }
    }, step * thumbSpeedChange);
}

function resetThumb($thumb, step){
    setTimeout(function(){
        step = step === undefined ? (thumbStep - 1)  : step;
        $thumb.css('backgroundPosition', '0px -' + (146 * step)  + 'px');
        if (step - 1 >= 0){
            resetThumb($thumb, step - 1);
        }
    }, ((thumbStep - 1) - step) * thumbSpeedChange);
}


/*item clikc
// TEAM
function initTeam(){
  var $teamAnchor = $('#team');
  var $contactsAnchor = $('#contacts');
  var $teamGroup = $('div[group=team].team-group:not(.blank)');
  var $teamItem = $teamGroup.find('.item');

  var thumbStep = 7;
  var thumbSpeedChange = 150 / thumbStep;

  function playThumb($thumb, step){
    setTimeout(function(){
      step = step === undefined ? 0 : step;
      $thumb.css('backgroundPosition', '0px -' + ($thumb.height() * step)  + 'px');
      if (step + 1 < thumbStep){
        playThumb($thumb, step + 1);
      }
    }, step * thumbSpeedChange);
  }

  function resetThumb($thumb, step){
    setTimeout(function(){
      step = step === undefined ? (thumbStep - 1)  : step;
      $thumb.css('backgroundPosition', '0px -' + ($thumb.height() * step)  + 'px');
      if (step - 1 >= 0){
        resetThumb($thumb, step - 1);
      }
    }, ((thumbStep - 1) - step) * thumbSpeedChange);
  }

  $teamItem.on('click', function(e){
    e.preventDefault();

    var $clickedItem = $(this);
    var $currentItem = $teamGroup.find('.item.open');

    $("html").getNiceScroll().stop();

    $('html,body').stop().animate({
      scrollTop: $clickedItem.offset().top - 160
    }, 1200, 'easeInOutCubic');

    if (!$clickedItem.hasClass('open')){
      $clickedItem.addClass('open');
      $clickedItem.find('p').slideDown('slow');
      $clickedItem.find('.ico-open-close').removeClass('open').addClass('close');
      playThumb($clickedItem.find('.thumb'));
    }else{
      $clickedItem.removeClass('open');
      $clickedItem.find('p').slideUp('slow');
      $clickedItem.find('.ico-open-close').removeClass('close').addClass('open');
      resetThumb($clickedItem.find('.thumb'));
    }
  });
}
  
*/