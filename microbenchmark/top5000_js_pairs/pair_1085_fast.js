const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 <= 0) {
            return false;
          }
          if (VAR_2 % 1001 === 0) {
            VAR_1();
            return FUNCTION_1.bind(null, VAR_1, --VAR_2);
          }
          VAR_1();
          return FUNCTION_1(VAR_1, --VAR_2);
        }
        function FUNCTION_2(VAR_3) {
          while (true) {
            VAR_3 = VAR_3();
            if (!VAR_3) {
              break;
            }
          }
        }
        var FUNCTION_3 = function (VAR_4, VAR_5) {
          var VAR_6 = FUNCTION_1.bind(null, VAR_4, VAR_5);
          return FUNCTION_2(VAR_6);
        };
        FUNCTION_3(function () {
          return 2 * 2;
        }, 100000);
    }
};