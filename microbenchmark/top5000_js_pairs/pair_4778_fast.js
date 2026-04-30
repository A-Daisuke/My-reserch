const Benchmark = {
    run: function() {
        function FUNCTION_3() {
          var VAR_7 = undefined;
        }
        var VAR_1 = 10000;
        function FUNCTION_1() {
          var VAR_2 = undefined;
          for (var VAR_3 = 1; VAR_3 < VAR_1; VAR_3++) if (VAR_2);
        }
        function FUNCTION_2(VAR_4) {
          var VAR_5 = VAR_4;
        }
        FUNCTION_3();
    }
};