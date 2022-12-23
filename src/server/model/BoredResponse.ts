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
    price: Price;
    link: string;
    key: string;
    accessibility: Accessibility;

    constructor(boredResponse: any) {
        this.activity = boredResponse.activity;
        this.type = boredResponse.type;
        this.participants = boredResponse.participants;
        this.price = boredResponse.price === 0 ? Price.Free : boredResponse.price <= .5 ? Price.Low : Price.High;
        this.link = boredResponse.link;
        this.key = boredResponse.key;
        this.accessibility = boredResponse.accessibility <= .25 ? Accessibility.High : boredResponse <= .75 ? Accessibility.Medium : Accessibility.Low;
    }
}

type User = {
    name: string
    accessibility: Accessibility
    price: Price
}

export { BoredResponse, User, Price, Accessibility }