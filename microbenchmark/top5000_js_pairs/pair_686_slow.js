const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var FUNCTION_2 = function () {
            FUNCTION_3();
          };
          FUNCTION_2.prototype.FUNCTION_4 = function () {
            console.log("From public.");
          };
          FUNCTION_2.prototype.FUNCTION_5 = function () {
            console.log("From another public.");
          };
          function FUNCTION_3() {}
          function FUNCTION_6() {
            console.log("From another private.");
          }
          return new FUNCTION_2();
        };
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) var VAR_2 = new FUNCTION_1();
    }
};