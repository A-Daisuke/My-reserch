const Benchmark = {
    run: function() {
        var VAR_1 = 5;
        var VAR_2 = 0;
        var VAR_3 = 10;
        function FUNCTION_1(VAR_4) {
          if (VAR_4 >= VAR_1) {
            return;
          }
          for (var VAR_5 = VAR_2; VAR_5 < VAR_3; VAR_5++) {
            FUNCTION_1(VAR_4 + 1);
          }
        }
        FUNCTION_1(0);
    }
};