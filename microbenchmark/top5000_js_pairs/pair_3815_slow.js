const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return undefined;
        }
        var VAR_1 =
          Date.VAR_1 ||
          function () {
            return +new Date();
          };
        function FUNCTION_2(VAR_2, VAR_3) {
          var VAR_4 = 0;
          return function (VAR_5) {
            var VAR_6 = VAR_1();
            if (VAR_6 - VAR_4 > VAR_3) {
              VAR_4 = VAR_6;
              VAR_2.apply(this, arguments);
            }
          };
        }
        var VAR_7 = 100;
        var VAR_8 = FUNCTION_2(function () {
          FUNCTION_1();
        }, 100);
        while (VAR_7--) VAR_8();
    }
};