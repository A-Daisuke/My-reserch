const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2 === 1 ? VAR_1 : VAR_1 + FUNCTION_1(VAR_1, VAR_2 - 1);
        }
        FUNCTION_1(12, 1000);
    }
};