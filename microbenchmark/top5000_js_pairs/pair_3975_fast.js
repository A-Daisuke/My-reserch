const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_5) {
          return !isNaN(VAR_5) && (typeof VAR_5 === "number" || VAR_5 instanceof Number);
        }
        function FUNCTION_2(VAR_6) {
          return FUNCTION_1(VAR_6) && VAR_6 % 1 === 0;
        }
        var VAR_7 = false;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_7 = FUNCTION_2(VAR_3);
        }
    }
};