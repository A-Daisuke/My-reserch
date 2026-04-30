const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_4 = 0;
          for (var VAR_3 = 0; VAR_3 < 100000; ++VAR_3) {
            VAR_4 += VAR_3;
          }
          var VAR_5 = 1;
          var VAR_6 = eval("(function(i) { return prod * i; })");
          for (var VAR_7 = 1; VAR_3 < 100000; ++VAR_3) {
            VAR_5 = VAR_6(VAR_3);
          }
        }
        FUNCTION_1();
    }
};