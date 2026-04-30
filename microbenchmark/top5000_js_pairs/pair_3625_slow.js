const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Array.apply(null, new Array(VAR_1));
        }
        FUNCTION_1(10);
        FUNCTION_1(100);
        FUNCTION_1(1000);
        FUNCTION_1(10000);
    }
};