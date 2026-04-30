const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          VAR_1 = (function (VAR_3) {
            return VAR_1 + 1;
          })(VAR_1);
          VAR_1 = (function (VAR_4) {
            return VAR_1 + 2;
          })(VAR_1);
          VAR_1 = (function (VAR_5) {
            return VAR_1 + 3;
          })(VAR_1);
          return VAR_1;
        }
        var VAR_6;
        for (VAR_6 = 0; VAR_6 < 10000; VAR_6++) FUNCTION_1(VAR_6);
    }
};