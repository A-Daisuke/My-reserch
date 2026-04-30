const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 100000;
        while (VAR_1 < VAR_2) {
          var FUNCTION_1 = function FUNCTION_1() {
            VAR_1++;
          };
          FUNCTION_1();
        }
    }
};