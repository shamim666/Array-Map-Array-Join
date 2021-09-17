const loadCountries = () =>{

    const url = `https://restcountries.eu/rest/v2/all`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) =>{

    const getHTML = countries.map(country => { 
        displayComponent(country)
        
    });
    console.log(getHTML);
        
    }
    
    // console.log(getCountries);
    // console.log(getCountries[0]);


//     const showinHTML = document.getElementById('countries')
//     showinHTML.innerHTML = getCountries[0]; 
// }



const displayComponent = (country) => {

    return  `<div>
    <h2>${country.name}</h2>
    <h4>${country.capital}</h4>
    <img src="${country.flag}">
    </div>`
    
    }

loadCountries();