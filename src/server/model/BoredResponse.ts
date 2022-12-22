class BoredResponse {
    activity: string;
    type: string;
    participants: number;
    price: "Free" | "Low" | "High";
    link: string;
    key: string;
    accessibility: "High" | "Medium" | "Low";

    constructor(boredResponse:any) {
        this.activity = boredResponse.activity;
        this.type = boredResponse.type;
        this.participants = boredResponse.participants;
        this.price = boredResponse.price === 0 ? "Free" : boredResponse.price <= .5 ? "Low" : "High";
        this.link = boredResponse.link;
        this.key = boredResponse.key;
        this.accessibility = boredResponse.accessibility <= .25 ? "High" : boredResponse <= .75 ? "Medium" : "Low";
    }
}

export { BoredResponse }