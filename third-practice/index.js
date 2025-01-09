function weatherTips(weather){
    const prompt = document.getElementById("prompt");
    let textInput = document.getElementById(weather);
    let todaysWeather = textInput.value.toLowerCase();
    
    if(todaysWeather === "sunny"){
        prompt.textContent = "Wear sunglasses, a t-shirt, and light pants or shorts.";
    } else if (todaysWeather === "rainy"){
        prompt.textContent = "Wear a raincoat, carry an umbrella, and waterproof shoes.";
    } else if (todaysWeather === "cold"){
        prompt.textContent = "Wear a heavy coat, scarf, gloves, and warm boots."
    } else if (todaysWeather === "snowy"){
        prompt.textContent = "Wear a winter jacket, snow boots, gloves, and a hat."
    }
}