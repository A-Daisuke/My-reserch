const Benchmark = {
    run: function() {
        FUNCTION_1(1, 2, 3, 100000);
        function FUNCTION_1(VAR_5, VAR_6, VAR_7, VAR_8, VAR_9) {
          VAR_5;
          VAR_6;
          VAR_7;
          VAR_9-- && FUNCTION_1(VAR_5, VAR_6, VAR_7, VAR_8, VAR_9);
        }
    }
};