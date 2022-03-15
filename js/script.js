let loadReport = (city) => {
    let message = "Loading weather report of " + city + " ..."
    alert(message);
}

let acceptCookie = (element) => {
    element.parentElement.remove();
}

let convertUnits = (element) => {
    let unit = element.value;
    var elements = document.querySelectorAll(".temperature-min, .temperature-max");
    elements.forEach((e) => {
        let value = parseInt(e.innerText);
        let result = 0;
        if(unit === "celcius"){
            result = (value - 32) * (5/9);
        }else{
            result = (value * 9/5) + 32;
        }
        e.innerText = Math.trunc(result) + "°";
    });
}