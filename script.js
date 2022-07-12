let SearchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

SearchBtn.addEventListener("click" , () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
       .then((response) => response.json()) //.then((hey) => hey.json()) can also be done likethis,responseisjustname
       .then((data) => {console.log(data[0]);
       console.log(data[0].capital[0]);
       console.log(data[0].flags.svg);
       console.log(data[0].name.common);
       console.log(Object.keys(data[0].currencies)[0]);
       console.log(data[0].currencies[Object.keys(data[0].currencies)]);
       console.log(data[0].languages[Object.keys(data[0].languages)[0]]);
       console.log(data[0].maps.googleMaps);
    })
});
 
//EXPLANATION OF LINE 14
//currencies ni ander IND ni value joi ti toh Objects.keys() method thi array of string ma convert kary ane array ni first value etle index 0 ma IND value lidhi {IND ni jagya a je country ni cuurency name hoy a}

 // 
 //currencies ek array che jeni ander object che INR have eni ander key name ni value levi che so for that savathi pehla currencies ni array ma Object.keys() method use karine ene array of string ma convert karine name vali key ne call kari ane value lidhi  {IND ni jagya a je country ni cuurency name hoy a}