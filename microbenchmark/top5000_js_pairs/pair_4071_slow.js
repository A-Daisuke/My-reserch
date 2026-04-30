const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            ++VAR_2;
          }
          return function () {
            return VAR_2;
          };
        }
        function FUNCTION_2(VAR_4) {
          var VAR_5 = 0;
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            ++VAR_5;
          }
          return VAR_5;
        }
        var VAR_7 = FUNCTION_1(10000);
        var VAR_8 = FUNCTION_2;
        (function (VAR_9) {
          VAR_9();
        })(FUNCTION_1(10000));
    }
};