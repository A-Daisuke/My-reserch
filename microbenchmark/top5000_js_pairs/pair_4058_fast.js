const Benchmark = {
    run: function() {
        const FUNCTION_1 = function (VAR_1) {
          return VAR_1.length <= 2048;
        };
        FUNCTION_1(`${"#".repeat(8000)}`);
    }
};