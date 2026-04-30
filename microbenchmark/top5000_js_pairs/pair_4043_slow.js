const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        var VAR_1 = 1000;
        function FUNCTION_2(VAR_2) {
          if (VAR_2 == 0) return;
          else {
            FUNCTION_1();
            FUNCTION_2(VAR_2 - 1);
          }
        }
        FUNCTION_2(VAR_1);
    }
};