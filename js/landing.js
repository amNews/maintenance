$(function() {

        $('#menu a').click(function() {
        var $this = $(this);
         var $tab  = $('#'+$this.data('content'));

        $('#menu a').removeClass('active');
        $this.addClass('active');

        $('div.tab').removeClass('active').addClass('nocontent');
         $tab.addClass('active').removeClass('nocontent');

        });
});