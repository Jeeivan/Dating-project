export function calculatePoints(herAge: number, hisAge: number) {
    const ageDifference = hisAge - herAge
    let points = 0;
    
    if (herAge >= 18 && herAge <= 21) {
        if (ageDifference <= 2) points = 4;
        else if (ageDifference === 3) points = 3;
        else if (ageDifference >= 4 && ageDifference <= 5) points = 1;
        else if (ageDifference >= 5 && ageDifference <= 8) points = 0;
        else if (ageDifference > 8) points = 0;
    } else if (herAge >= 22 && herAge <= 24) {
        if (ageDifference <= 2) points = 4;
        else if (ageDifference === 3) points = 4;
        else if (ageDifference >= 4 && ageDifference <= 5) points = 3;
        else if (ageDifference >= 5 && ageDifference <= 8) points = 2;
        else if (ageDifference > 8) points = 0;
    } else if (herAge >= 25 && herAge <= 29) {
        if (ageDifference <= 2) points = 4;
        else if (ageDifference === 3) points = 4;
        else if (ageDifference >= 4 && ageDifference <= 5) points = 4;
        else if (ageDifference >= 5 && ageDifference <= 8) points = 2;
        else if (ageDifference > 8) points = 0;
    } else if (herAge >= 30 && herAge <= 35) {
        if (ageDifference <= 2) points = 4;
        else if (ageDifference === 3) points = 4;
        else if (ageDifference >= 4 && ageDifference <= 5) points = 4;
        else if (ageDifference >= 5 && ageDifference <= 8) points = 3;
        else if (ageDifference > 8) points = 2;
    } else if (herAge >= 36) {
        if (ageDifference <= 2) points = 4;
        else if (ageDifference === 3) points = 4;
        else if (ageDifference >= 4 && ageDifference <= 5) points = 4;
        else if (ageDifference >= 5 && ageDifference <= 8) points = 4;
        else if (ageDifference > 8) points = 3;
    }
    console.log("Points: ", points);
    
    return points;
}