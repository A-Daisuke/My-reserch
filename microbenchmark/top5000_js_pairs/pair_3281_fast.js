const Benchmark = {
    run: function() {
        var VAR_3;
        function FUNCTION_2() {
          if (VAR_3) {
            return VAR_3;
          }
          VAR_3 = new Date();
          return VAR_3;
        }
        for (var VAR_2 = 0; VAR_2 <= 10000; VAR_2++) {
          FUNCTION_2();
        }
    }
};