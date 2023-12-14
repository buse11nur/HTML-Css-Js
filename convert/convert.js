window.onload = function() {
    document.getElementById("calculate").onclick = convert;
}

function convert(event) {
    var input = document.getElementById("input");
    value = parseInt(input.value);

    var conversion = document.getElementById("convert");
    if(conversion.value == "kgtopounds") {
        value *= 2.20462262;
    } else {
        value *= 0.45359237;
    }

    var answer = document.getElementById("answer");
    answer.innerHTML = value;
}