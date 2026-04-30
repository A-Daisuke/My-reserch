const Benchmark = {
    run: function() {
        const FUNCTION_1 = function (VAR_1) {
          return /^[\s\S]{0,2048}$/i.test(VAR_1);
        };
        FUNCTION_1(`${"#".repeat(8000)}`);
    }
};