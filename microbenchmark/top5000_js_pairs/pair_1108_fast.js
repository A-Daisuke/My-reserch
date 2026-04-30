const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 100000;
        while (VAR_1 < VAR_2) {
          var FUNCTION_2 = function () {
            VAR_1++;
          };
          FUNCTION_2();
        }
    }
};