const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return new Array(VAR_2).join(VAR_1);
        }
        function FUNCTION_2(VAR_3) {
          VAR_3;
        }
        FUNCTION_2(FUNCTION_1("Hello world!", 1000));
    }
};