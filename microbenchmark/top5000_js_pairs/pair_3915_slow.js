const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = 0;
          for (var VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
            VAR_1 += VAR_2;
          }
          return VAR_1;
        }
        var FUNCTION_2 = function () {};
        FUNCTION_2.prototype.FUNCTION_3 = function FUNCTION_3() {
          for (var VAR_3 = 0; VAR_3 < 1000; ++VAR_3) {
            FUNCTION_1();
          }
        };
        var VAR_4 = new FUNCTION_2();
        VAR_4.FUNCTION_3();
    }
};