const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
            VAR_2 += VAR_1 ^ (VAR_3 + 1);
          }
          return VAR_2;
        }
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          VAR_4 += (function (VAR_7) {
            var VAR_8 = 0;
            for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
              VAR_8 += VAR_7 ^ (VAR_6 + 1);
            }
            return VAR_8;
          })(VAR_5);
        }
    }
};