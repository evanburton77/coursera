let userRole = "Enrolled Member"
let accessLevel
if (userRole === "Employee"){
accessLevel = "You have access to Dietary Services";
} else if (userRole === "Enrolled Member"){
    accessLevel = "You have access to both Dietary Services and one-on-one interaction with a dietician";
} else if (userRole === "Subscriber") {
    accessLevel = "You have partial access to facilitate Dietary Services only";
} else {
    accessLevel = "You need to enroll or at least subscribe";
}

console.log("What you get:", accessLevel)
