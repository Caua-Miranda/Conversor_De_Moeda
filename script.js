const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    const dolarToday = 5.2
    const euroToday = 6.2

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML= new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

}

function changeName(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")
    
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/DOLAR.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src="./assets/EURO.png"
    }

    convertValues()
}


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeName)

