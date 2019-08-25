window.onload = function () {
var inputElem = document.getElementsByName("amount");
    inputElem[0].oninput = function() {
        var x = document.getElementsByName("amount");
        var y = document.getElementsByClassName("price");
        for (var i = 0; i < x.length; i++ ) {
            if( +(x[i].value) > 100 ){
                x[i].value = 100;
            }
        var summResult = +(y[i].textContent) * +(x[i].value);
        document.getElementsByClassName("result")[i].textContent = summResult;;
        } 
    }

    inputElem[1].oninput = function() {
        var x = document.getElementsByName("amount");
        var y = document.getElementsByClassName("price");
        for (var i = 0; i < x.length; i++ ) {
            if( +(x[i].value) > 100 ){
                x[i].value = 100;
            }
        var summResult = +(y[i].textContent) * +(x[i].value);
        document.getElementsByClassName("result")[i].textContent = summResult;
        } 
    }

}

