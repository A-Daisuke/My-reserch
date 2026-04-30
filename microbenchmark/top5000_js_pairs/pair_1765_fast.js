const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_7) {
          return VAR_7 + 1;
        }
        function FUNCTION_3(VAR_8) {
          return VAR_8 + 2;
        }
        function FUNCTION_4(VAR_9) {
          return VAR_9 + 3;
        }
        function FUNCTION_5(VAR_10) {
          var VAR_2 = 0;
          VAR_10 = FUNCTION_2(VAR_10);
          VAR_10 = FUNCTION_3(VAR_10);
          VAR_10 = FUNCTION_4(VAR_10);
          return VAR_10;
        }
        var VAR_6;
        for (VAR_6 = 0; VAR_6 < 10000; VAR_6++) FUNCTION_5(VAR_6);
    }
};