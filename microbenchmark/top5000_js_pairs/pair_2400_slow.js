const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(Array(10000), (VAR_2, VAR_3) => VAR_3 + 1);
        function FUNCTION_1(VAR_4, VAR_5) {
          return [VAR_4, ...VAR_5];
        }
        FUNCTION_1(1, VAR_1);
        FUNCTION_1(2, VAR_1);
        FUNCTION_1(3, VAR_1);
    }
};