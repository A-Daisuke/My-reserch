const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1() {
          return ++VAR_1;
        }
        function FUNCTION_2(VAR_2) {
          return ++VAR_2;
        }
        function FUNCTION_3(VAR_3) {
          return VAR_3 + 1;
        }
        function FUNCTION_4() {
          if (VAR_1 !== 1000000) throw new Error("invalid result for i");
        }
        VAR_1 = 0;
        while (++VAR_1 < 1000000) {}
        FUNCTION_4();
    }
};