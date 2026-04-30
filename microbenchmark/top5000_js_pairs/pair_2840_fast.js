const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 0;
        };
        var FUNCTION_2 = function () {
          var VAR_3 = FUNCTION_1.VAR_1;
          for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
            VAR_3 += 1;
          }
          console.log("the answer is " + VAR_3);
        };
        FUNCTION_2();
    }
};