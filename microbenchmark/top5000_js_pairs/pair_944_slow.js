const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 1;
          while (VAR_1 >= 1 << VAR_2) VAR_2++;
          return VAR_2;
        }
        function FUNCTION_2(VAR_3) {
          return Math.floor(Math.log(VAR_3) / Math.log(2)) + 1;
        }
        for (var VAR_4 = 99900000; VAR_4 < 100000000; VAR_4++) var VAR_5 = FUNCTION_1(VAR_4);
    }
};