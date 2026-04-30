const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 - (VAR_1 % VAR_2);
        }
        console.assert(FUNCTION_1(15, 10) === 20);
        console.assert(FUNCTION_1(14, 10) === 10);
        console.assert(FUNCTION_1(14, 5) === 15);
    }
};