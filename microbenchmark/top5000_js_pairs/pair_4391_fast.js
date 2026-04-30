const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_2 = undefined;
        }
        var VAR_1 = 10000;
        function FUNCTION_2(VAR_4) {
          var VAR_5 = VAR_4;
        }
        function FUNCTION_3(VAR_6) {
          var VAR_7 = VAR_6;
          for (var VAR_8 = 1; VAR_8 < VAR_1; VAR_8++) if (VAR_7);
        }
        FUNCTION_1();
    }
};