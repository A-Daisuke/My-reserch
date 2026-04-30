const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_3) {
          VAR_3.KEY_1++;
        }
        function FUNCTION_2(VAR_4) {
          VAR_4();
        }
        function FUNCTION_3(VAR_5) {
          return function (VAR_6) {
            for (var VAR_2 = 0; VAR_2 < VAR_5; VAR_2++) {
              VAR_4();
            }
          };
        }
        function FUNCTION_4(VAR_7, VAR_8) {
          return function () {
            VAR_4(VAR_8);
          };
        }
        var VAR_9 = { KEY_1: 0 };
        FUNCTION_4(FUNCTION_4(FUNCTION_3, 1000000), FUNCTION_4(FUNCTION_1, VAR_9));
        var VAR_10 = VAR_9.KEY_1;
    }
};