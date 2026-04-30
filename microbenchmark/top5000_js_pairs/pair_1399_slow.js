const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return Object.prototype.toString.call(VAR_1).slice(8, -1).toLowerCase();
        }
        function FUNCTION_2(VAR_2) {
          return FUNCTION_1(VAR_2) === "object";
        }
        function FUNCTION_3(VAR_3) {
          return { KEY_1: VAR_3 };
        }
        var VAR_4 = 30000;
        var VAR_5 = 0;
        for (; VAR_5 < VAR_4; VAR_5++) {
          FUNCTION_2(FUNCTION_3(VAR_5));
        }
    }
};