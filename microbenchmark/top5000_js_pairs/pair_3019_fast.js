const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++);
        }
        function FUNCTION_3(VAR_2) {
          return VAR_2 * VAR_2;
        }
        var VAR_3 = false;
        for (var VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          FUNCTION_3(VAR_5);
          if (VAR_3) FUNCTION_1();
        }
    }
};