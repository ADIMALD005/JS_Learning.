const converterScale = () => {
    let convertion = prompt("Input what you're willing to convert🤞");

    if(convertion === "celcius"){
       let celcius = prompt("input celcius value:")
       celcius = parseFloat(celcius);
       let fahrenheit = (9/5 * celcius) + 32; 
       return fahrenheit + "°F";

    }else if(convertion === "fahrenheit") {
      let fahrenheit = prompt("input fahrenheit value:")
       fahrenheit = parseFloat(celcius);
       let celcius = (fahrenheit - 32) * 5/9; 
       return celcius + "°C";

    }
    else if(convertion === "kelvin" ) {
       let kelvin = prompt("input kelvin value:")
       kelvin = parseFloat(kelvin);
       let celcius = (kelvin - 273); 
       return celcius + "°C";

    }
   //   else if(convertion === "celcius" ) {
   //     let celcius = prompt("input celcius value:")
   //     celcius = parseFloat(celcius);
   //     let kelvin = (celcius - 273); 
   //     return kelvin + "K";
   //  }
   
    
    else{      
          return "Invalid input, input correct conversion spelling'";
    }
    
}
let result = converterScale();
alert(result);