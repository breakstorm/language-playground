var clientData = { 
    id: 094545, 
    fullName: "Not Set", // setUserName clientData의 메서드입니다. 
    setUserName: function (firstName, lastName) { // this는 clientData라는 객체를 지칭하고 있습니다. 
    this.fullName = firstName + " " + lastName; } 
} 

function getUserInput(firstName, lastName, callback ) { 
    // Do other stuff to validate firstName/lastName here 
    // Now save the names 
    callback (firstName, lastName); 
} 

getUserInput ("Barack", "Obama", clientData.setUserName); 
console.log (clientData.fullName);// 값에 설정되지 않음 
// fullName 프로퍼티가 window object의 인자로 세팅됨 
console.log (window.fullName); // Barack Obama
