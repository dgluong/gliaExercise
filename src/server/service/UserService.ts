import { Accessibility, Price } from '../model/BoredResponse';
import { User } from '../model/BoredResponse';


function getQueryParams (user:User) {
    let accessibilityQuery = "";
    let priceQuery = "";
    switch (user.accessibility) {
        case (Accessibility.High):
            accessibilityQuery = "maxaccessibility=.25";
            break;
        case (Accessibility.Medium):
            accessibilityQuery = "minaccessibility=.26&maxaccessibility=0.75";
            break;
        case (Accessibility.Low):
            accessibilityQuery = "minaccessibility=.76";
            break;
    }

    switch (user.price) {
        case (Price.High):
            priceQuery = "minprice=.6";
            break;
        case (Price.Low):
            priceQuery = "minprice=.1&maxprice=0.5";
            break;
        case (Price.Free):
            priceQuery = "price=0";
            break;
    }
    return `?${accessibilityQuery}&${priceQuery}`;
}

export { getQueryParams }