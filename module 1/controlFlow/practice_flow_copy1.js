let userType = "subscriber"
let userAccessLevel
switch (userType) {
    case "employee":
        userAccessLevel = "You have access to Dietary Services";
        break;
    case "subscriber":
        userAccessLevel = "You have access to Dietary Services and one-on-one Dietician meetings";
        break;
    case "non-subscriber":
        userAccessLevel = "You need to enroll or at least subscribe first.";
        break;
    default:
        userAccessLevel = "Unknown";
}

console.log("What you get:", userAccessLevel);
