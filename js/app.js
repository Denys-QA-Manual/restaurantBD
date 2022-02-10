$(function(){
 $('#date').daterangepicker({
 singleDatePicker: true,
 showOn: GamepadButton,
 buttonText: "",

 });
});

/* Accordion */

$("[data-collapse]").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    var blockId = $(this).data('collapse');
    
    $this.toggleClass("active");
       
});