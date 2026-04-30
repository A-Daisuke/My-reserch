const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return [...Array(VAR_1)].map((VAR_2, VAR_3) => VAR_3 + 1);
        }
        FUNCTION_1(100);
        FUNCTION_1(1000);
        FUNCTION_1(10000);
    }
};