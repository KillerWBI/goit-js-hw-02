function getShippingCost(country) {
    const ObjCountry = {
        "China": 100,
        "Chile": 250,
        "Australia": 170,
        "Jamaica": 120
    };

    switch (country) {
        case "China":
            return "Shipping to China will cost " + ObjCountry.China + " credits";
        case "Chile":
            return "Shipping to Chile will cost " + ObjCountry.Chile + " credits";
        case "Australia":
            return "Shipping to Australia will cost " + ObjCountry.Australia + " credits";
        case "Jamaica":
            return "Shipping to Jamaica will cost " + ObjCountry.Jamaica + " credits";
        default:
            return "Sorry, there is no delivery to your country";
    }
}

// Перевірка:
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


// можно еще так


function getShippingCostBeta(country) {
    const ObjCountry = {
        "China": 100,
        "Chile": 250,
        "Australia": 170,
        "Jamaica": 120
    };

    if (ObjCountry[country]) {
        return `Shipping to ${country} will cost ${ObjCountry[country]} credits`;
    } else {
        return "Sorry, there is no delivery to your country";
    }
}
