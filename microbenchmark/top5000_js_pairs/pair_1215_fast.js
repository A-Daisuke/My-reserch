const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 <= 0) {
            return;
          }
          if (VAR_2 % 1001 === 0) {
            VAR_1();
            return FUNCTION_1.bind(null, VAR_1, --VAR_2);
          }
          VAR_1();
          return FUNCTION_1(VAR_1, --VAR_2);
        }
        function FUNCTION_2(VAR_3) {
          while (VAR_3 && typeof VAR_3 === "function") {
            VAR_3 = VAR_3();
          }
        }
        var FUNCTION_3 = function (VAR_4, VAR_5) {
          return FUNCTION_2(function () {
            return FUNCTION_1(VAR_4, VAR_5);
          });
        };
        FUNCTION_3(function () {
          return 2 * 2;
        }, 100000);
    }
};