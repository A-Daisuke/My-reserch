const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_4 = 45;
          var VAR_5 = 1;
          for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_5 += VAR_4;
        }
        FUNCTION_1();
    }
};