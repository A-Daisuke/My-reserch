const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          while (VAR_1 < 1000) {
            VAR_1++;
            FUNCTION_1();
          }
        }
        var VAR_1 = 0;
        FUNCTION_1();
    }
};