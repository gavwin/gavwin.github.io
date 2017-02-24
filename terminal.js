$("#screen input").focus();
$("#screen input").on('keydown', function(event) {
    if(event.which === 13) {// Enter key pressed
        var $this = $(this),
            val = $this.val();
        $this.focus().val('');
        if(val === "hello world"){
            alert("you found the easter egg!");
        }
    }
});
