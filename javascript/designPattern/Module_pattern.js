// (function () {
//   // private 하게 사용할 변수, 함수

//   return {
//   // public 하게 사용할 변수, 함수
//   }
// })();


const HTMLChanger = (function () {
  var contents = 'contents'

  var changeHTML = function () {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }

  return {
    callChangeHTML: function () {
      changeHTML();
      console.log(contents);
    }
  };
})();

HTMLChanger.callChangeHTML();
console.log(HTMLChanger.contents);