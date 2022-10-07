$(document).ready(function () {
   let tabsItem = $('.tabs-item');
  tabsItem.on('click', function(event) {
      event.preventDefault();
      let ativeContent = $(this).attr('href');
      $('.visible').toggleClass('visible');
      $(ativeContent).toggleClass('visible');
      $('.tabs-item-active').toggleClass('tabs-item-active');
      $(this).toggleClass('tabs-item-active');
   });
   })
    
;