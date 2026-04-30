const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 0;
        };
        var FUNCTION_2 = function () {
          for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
            FUNCTION_1.VAR_1 += 1;
          }
          console.log("the answer is " + FUNCTION_1.VAR_1);
        };
        FUNCTION_2();
    }
};