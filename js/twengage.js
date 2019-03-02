jQuery(document).ready(function() {
jQuery('.faq-acc .btn-info').addClass('collapsed');
  jQuery('.faq-acc .btn-info').click(function(){
    jQuery(this).parent().toggleClass('shadow-acc');
  });
  jQuery('.tg-ul li').click(function(){
    jQuery('.tg-ul li').removeClass('active');
    jQuery(this).addClass('active');
  });
});

