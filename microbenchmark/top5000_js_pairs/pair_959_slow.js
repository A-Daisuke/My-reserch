const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Array(VAR_1).fill(Array(VAR_1).fill(0)).map([].slice.call.bind([].slice));
        }
        FUNCTION_1(32);
    }
};