const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_3) {
          var VAR_4 = 1;
          var VAR_5 = 2;
          while (VAR_3 >= VAR_5) {
            VAR_4++;
            VAR_5 *= 2;
          }
        }
        function FUNCTION_1(VAR_1) {
          return Math.floor(Math.log(VAR_1) / Math.log(2)) + 1;
        }
        for (var VAR_6 = 99900000; VAR_6 < 100000000; VAR_6++) var VAR_7 = FUNCTION_1(VAR_6);
    }
};