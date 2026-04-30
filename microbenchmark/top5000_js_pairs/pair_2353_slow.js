const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return new Array(VAR_2 + 1).join(VAR_1);
        }
        var VAR_3 = FUNCTION_1("W", 20000);
    }
};