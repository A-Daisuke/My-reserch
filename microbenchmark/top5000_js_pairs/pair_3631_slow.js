const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_2 && arguments.callee(VAR_1, --VAR_2) + VAR_1;
        }
        FUNCTION_1(4, 400);
    }
};