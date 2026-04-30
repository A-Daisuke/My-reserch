const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_2) {
          return Object.prototype.toString.call(VAR_2);
        }
        function FUNCTION_4(VAR_4) {
          return FUNCTION_2(VAR_4) === "[object Object]";
        }
        function FUNCTION_5(VAR_5) {
          return { KEY_1: VAR_5 };
        }
        var VAR_6 = 30000;
        var VAR_7 = 0;
        for (; VAR_7 < VAR_6; VAR_7++) {
          typeof FUNCTION_5(VAR_7) === "object";
        }
    }
};