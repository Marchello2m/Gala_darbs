 $(document).ready(function(){
  	$(".spooky").click(function(){
  		
  		width =$('img').width();
  		$('img').attr('width',width*1.1);
  		$( 'img' ).toggleClass( 'invereted ');
  		$( 'body' ).toggleClass( 'black' );
});
  });

