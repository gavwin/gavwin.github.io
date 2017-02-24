var $out = $("#output");
    $("#screen input").focus();
    $("#screen input").on('keydown', function(event) {
        if(event.which === 13) { // Enter key pressed
            var $this = $(this),
                val = $this.val();
            $this.focus().val('');
            if(val === "") {
              $out.append("<br>");
            } else
            if(val === "hello world") {
                $out.append("Hello Galaxy.<br>");
            } else
            if(val === "help") {
                $out.append("Here's a list of commands:<br>help - Sends a list of commands<br>");
            }

            else {
              $out.append("Command not found.<br>");
            }

            $this.val('');
        }
    });
