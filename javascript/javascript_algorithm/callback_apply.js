clientData = {
    id : 1111,
    fullName: "Not yet",
    setUserName: function(firstName, lastName){
        this.fullName = firstName + lastName;
    }
}

function getUserInput(firstName, lastName, callback, callObject){
    callback.apply(callObject, [firstName, lastName])
}

getUserInput("Barack", "Obama", clientData.setUserName, clientData);
console.log(clientData.fullName);