var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    // ---------------------------------------------------
    // const asianCountries = result.filter(country => country.region === "Asia");
    // console.log(asianCountries);
    // -------------------------------------------------------
// const countriesWithLessThan2Lakhs = result.filter(country => country.population < 200000);
// console.log(countriesWithLessThan2Lakhs);
// ----------------------------------------------------------
// result.forEach(country => {
//     console.log(`Name: ${country.name}`);
//     console.log(`Capital: ${country.capital}`);
//     console.log(`Flag: ${country.flag}`);
//     console.log("------------------");
//   });
// ----------------------------------------------------
// const totalPopulation = result.reduce((acc, country) => acc + country.population, 0);
// console.log(`Total population: ${totalPopulation}`);
// -----------------------------------------------------
// const usDollarCountry = result.find(country => country.currencies.some(currency => currency.code === "USD"));
// console.log(`Country using US Dollar as currency: ${usDollarCountry.name}`);
}
