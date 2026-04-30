const Benchmark = {
    run: function() {
        VAR_1 = 10000;
        var VAR_2 = (function () {
          var VAR_3 = 0;
          return function () {
            return ++VAR_3;
          };
        })();
        var FUNCTION_1 = function (VAR_4, VAR_5) {
          var VAR_6;
          return function iterator(VAR_7) {
            return (VAR_6 = VAR_2()) === VAR_5
              ? VAR_7
              : !(VAR_6 % 3) || !(VAR_6 % 5)
                ? iterator(VAR_7 + VAR_6)
                : iterator(VAR_7);
          };
        };
        FUNCTION_1(VAR_2, VAR_1)(0);
    }
};