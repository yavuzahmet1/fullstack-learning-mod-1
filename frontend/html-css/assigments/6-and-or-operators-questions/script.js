//! && AND || OPERATOR REINFORCEMENT DETAILS

//! 1-Determining Username
/*If a username is not entered in the user's profile, use the name "Guest". Specify the username using the variables below.*/
console.log("1-Determining Username");

let username = "Ahmet"; //prompt("Enter your username!")
const resultUserName = username || "username is guest"

console.log(`username is ${resultUserName}`);

//! 2-Show Product Price
// A product can have three different prices: `discountPrice`, `campaignPrice`, or `normalPrice`. If none of these prices are available, return "No price".
console.log("2-Show Product Price");

let discountPrice = "", campaignPrice = null, normalPrice = 0;
const priceResult = discountPrice || campaignPrice || normalPrice || "No price"

console.log(priceResult);

//! 3-Determining Communication Preferences
// If a user does not have a phone number or email address, return a "Contact information missing" message by default.
console.log("3 - Determining Communication Preferencess");

let email = ""//prompt("Enter your email.");
let phoneNumber = "" //prompt("Enter your telephone number.")
let resultInfo = Boolean(email && phoneNumber)

if (!resultInfo) {
    console.log("There is an error in the information you entered.")
} else {
    console.log(`Your email is : ${email} and your phone mumber is ${phoneNumber}`);
}

//! 4-Address Information Verification
// A user can have three different address information: `homeAddress`, `isAddress`, or `mailBox`. If all information is missing, return "No address".
console.log("4-Address Information Verification");

let homeAddress = "" //prompt("Enter your home address");
let workAddress = null //prompt("Enter your home work address");
let mailBox = 0 //prompt("Enter your home mail box");
let adressInfo = homeAddress || workAddress || mailBox;

if (!adressInfo) {
    console.log("No address information");
} else {
    console.log(`your address information : ${homeAddress}${workAddress} ${mailBox}`);
}

//! 5- Set Default Language
// An application has language options such as `userLanguage`, `browserLanguage`, and `defaultLanguage`. If all options are not available, return "No language selected".
console.log("5- Set Default Language");

let defaultLanguage = "";
let browserLanguage = "";
let userLanguage = "";
const selectedLanguage = defaultLanguage || browserLanguage || userLanguage || "No language selected!"

console.log(selectedLanguage)

//! 6-Show Profile Picture
// A user has profile picture options such as `profilePhoto`, `defaultAvatar`, and `defaultImage`. If all of them are missing, return "No image".
console.log("6-Show Profile Picture");

let defaultAvatar = "";
let defaultImage = null;
let profilePhoto = null;
let resultImage = defaultAvatar || defaultImage || profilePhoto || "No image";

console.log(resultImage);

//! 7-User Information
// A user can have a first name, last name, and nickname. If no information is available, return "Anonymous".
console.log("7-User Information");

const firstName = "";
const surName = "";
const username_ = "";
let resultInfo_ = firstName || surName || username_ || "Anonymous"

console.log(resultInfo_);

//! 8-Show Age Information
// A user has either `age`, `birthOfYear`, or `estimatedAge`. If no age information is provided, return "Age unknown"
console.log("8-Show Age Information");

let age = "";
let birthOfYear = "";
let estimatedAge = "";
const resultAge = age || birthOfYear || estimatedAge || "Age unknown"
console.log(resultAge)

//! 9-Game Score Determination
// A game has `mainScore`, `backupScore`, and `defaultScore` information. If all are `falsy`, return "No score".
console.log("9-Game Score Determination");

let mainScore = 0;
let backupScore = 0;
let defaultScore = 0;

const resultScore = mainScore || backupScore || defaultScore || `No score`;

console.log(resultScore);


//! 10-Online Status Check
// A user can have an online status such as `activeStatus`, `lastLogin`, or `waitStatus`. If all of them are `falsy`, return "Offline"
console.log("10-Online Status Check");
let activeStatus = false;
let lastLogin = false;
let waitStatus = false;

const resultStatus = activeStatus || lastLogin || waitStatus || `${console.log(resultFunction())} `

function resultFunction() {
    console.log("All of them are falsy")
    return "status is offline"
}
console.log(`Status is ${resultStatus === true ? "online" : "offline"} `);

//! 1- User Login Control
// If a user has `userName` and `password`, allow them to log in, otherwise return a "Login information missing" message.
console.log("1- User Login Control");

let username = "";
let password = "";

const userControl = username && password && `${username} Login successful` || "Login information missing"

console.log(userControl);

//! 2-Order Completion Status
// For an order to be completed, `PaymentMade` and `ProductReady` must be present. If both are present, return `Order completed`, otherwise return `Order pending`.
console.log("2-Order Completion Status");

let feePaid = false;
let productIsReady = false;

const orderStatus = feePaid && productIsReady && `Your payment has been made and your order is ready.` || `${orderProblem()}`

function orderProblem() {
    if (!feePaid && !productIsReady) {
        return "There is a problem with your payment and the preparation of your order."
    } else if (!feePaid) {
        return "There was a problem with your payment!";
    } else {
        return "There is a problem with the preparation of the product";
    }
}
console.log(orderStatus);

//! 3-Discount Application
// If a product is both `discountCodeEntered` and `productInCart`, the discount is applied. Otherwise, return the message "Discount cannot be applied".
console.log("3-Discount Application");

let discountCodeEntered = true;
let productInCart = true;

const discountStatus = discountCodeEntered && productInCart && "Discount applied" || "Discount cannot be applied"

console.log(discountStatus);

//! 4-Appointment Confirmation
// If both `dateConfirmed` and `timeConfirmed` are provided for an appointment, return "Appointment confirmed", otherwise return "Pending confirmation".
console.log("4-Appointment Confirmation");

let timeConfirmed = true;
let dateConfirmed = true;

const confirmedStatus = timeConfirmed && dateConfirmed && "Appointment confirmed" || "Pending confirmation"

console.log(confirmedStatus);

//! 5-Profile Completion Status
// If a profile contains both `profilePhoto` and `aboutInfo`, "Profile is complete" is returned. Otherwise, "Profile is incomplete" is returned.
console.log("5-Profile Completion Status");

let profilePhoto = false;
let aboutInfo = "";

const profileStatus = profilePhoto && aboutInfo && "Profile is complete" || `Profile is't completed : ${profilProblem()}`

function profilProblem() {
    if (!profilePhoto && !aboutInfo) {
        return `Your profile photo and information are missing.`
    } else if (!profilePhoto) {
        return `Your profile photo is missing`
    } else {
        return `Information about is incomplete`
    }
}

console.log(profileStatus);

//! 6-Share Post
// To share a post, both the `title` and `content` must be complete. Otherwise, the message "Post incomplete" will be returned.
console.log("6-Share Post");

let title = "";
let content = "";

const postStatus = title && content && "successfully sent" || "Post incomplete";

console.log(postStatus);

//! 7-Credit Approval
// A loan application is approved if the `creditScore` and `incomeStatus` are suitable. Otherwise, it returns "Not Approved".
console.log("7-Credit Approval");

let creditScore = 0;
let incomeStatus = 0;

let credtStatus = creditScore && incomeStatus && "loan approved" || `Not Approved : ${creditProblem()}`

function creditProblem() {
    if (!creditScore && !incomeStatus) {
        return "Your credit score and income status are not eligible for a loan";
    } else if (!creditScore) {
        return "Your credit score is not suitable for getting a loan";
    } else {
        return "Your income status are not eligible for a loan";
    }
}

console.log(credtStatus);

//! 8-Event Participation
// To attend an event, both `TicketPurchased` and `AgeLimitAppropriate` must be met. Otherwise, "Participation is not possible" will be returned.
console.log("8-Event Participation");

let ticketPurchased = true;
let ageLimitAppropriate = true;

let participationStatus = ticketPurchased && ageLimitAppropriate && "Participation is appropriate" || "Participation is not possible";

console.log(participationStatus);

//! 9-File Upload Status
// In order for a file to be uploaded, it must be `fileSelected` and `permissionGranted`. Otherwise, the message "File cannot be uploaded" will be returned.
console.log("9-File Upload Status");

let fileSelected = true;
let permissionGranted = true;

const uploadStatus = fileSelected && permissionGranted && "Uploaded successful" || "File cannot be uploaded"

console.log(uploadStatus);

//! 10-Reservation Confirmation
// In order for a hotel reservation to be completed, both `paymentConfirmed` and `roomReady` must be present. Otherwise, it will return "Reservation pending".
console.log("10-Reservation Confirmation");

let paymentConfirmed = true;
let roomReady = true;

const reservationStatus = paymentConfirmed && roomReady && "Your reservation has been confirmed" || "Reservation pending";

console.log(reservationStatus);
