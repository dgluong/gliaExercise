enum Accessibility {
    High = "High", 
    Medium = "Medium", 
    Low = "Low"
}

enum Price {
    High = "High", 
    Low = "Low", 
    Free = "Free"
}

class BoredResponse {
    activity: string;
    type: string;
    participants: number;
    price: Price | undefined;
    link: string;
    key: string;
    accessibility: Accessibility | undefined;
    error: string;

    constructor(boredResponse: any) {
        this.activity = boredResponse.activity;
        this.type = boredResponse.type;
        this.participants = boredResponse.participants;
        this.price = boredResponse.price === 0 ? Price.Free :
            boredResponse.price <= .5 ? Price.Low : 
            boredResponse.price > 0.5 ? Price.High : 
            undefined;
        this.link = boredResponse.link;
        this.key = boredResponse.key;
        this.accessibility = boredResponse.accessibility <= .25 ? Accessibility.High : 
            boredResponse.accessibility <= .75 ? Accessibility.Medium : 
            boredResponse.accessibility > 0.75 ? Accessibility.Low: 
            undefined;
        this.error = boredResponse.error;
    }
}

type User = {
    name: string
    accessibility: Accessibility
    price: Price
}


export { BoredResponse, User, Price, Accessibility }