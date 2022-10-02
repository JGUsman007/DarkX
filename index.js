$(function () {
    function display(bool) {
        if (bool) {
            $("#container").fadeIn("slow");
        } else {
            $("#container").fadeOut("slow");
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://info/exit', JSON.stringify({}));
            return
        }
    };
})   

document.querySelectorAll('a').forEach(element => {
	element.addEventListener('click', e => {
  	e.preventDefault()
    
    window.invokeNative('openUrl', e.target.href)
  })
})