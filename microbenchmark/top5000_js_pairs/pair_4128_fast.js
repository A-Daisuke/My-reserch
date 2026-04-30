const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1.b && VAR_1.b.c && true;
        }
        FUNCTION_1({});
    }
};