const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Object.prototype.toString.call(VAR_1).slice(8, -1).toLowerCase();
        }
        function FUNCTION_3(VAR_3) {
          return FUNCTION_1(VAR_3) === "object";
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