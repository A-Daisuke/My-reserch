const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 0;
        var VAR_3 = 0;
        function FUNCTION_1() {
          VAR_3 = 0;
          return FUNCTION_2;
        }
        function FUNCTION_2() {
          if (!(VAR_3 < 1000000)) return FUNCTION_3;
          if (VAR_3 % 10) VAR_1++;
          VAR_3++;
          return FUNCTION_2;
        }
        function FUNCTION_3() {
          return null;
        }
        var VAR_4 = FUNCTION_1;
        try {
          while (true) {
            VAR_4 = VAR_4();
          }
        } catch (VAR_5) {}
    }
};