$(document).ready(function(){
   $('.curtains').curtain();
   
});

$(document).ready(function(){
   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    scrollorama.animate('#intro h1',{
    	duration:180, property:'left', end:-960
    });
    
});