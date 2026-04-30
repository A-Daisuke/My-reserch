const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Array(VAR_1)
            .fill(Array(VAR_1).fill(0))
            .map((VAR_2) => VAR_2.slice());
        }
        FUNCTION_1(32);
    }
};