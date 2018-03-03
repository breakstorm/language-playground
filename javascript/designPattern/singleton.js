var printer = (function () {
  var printerInstance;

  function create () {
    function print () {
      //printer machine
    }

    function turnOn () {
      // warm up 
      // check for paper
    }

    return {
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function () {
      if(!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };

  function Singleton () {
    if(!printerInstance) {
      printerInstance = initalize();
    }
  };
})();

var officePrinter = printer.getInstance();