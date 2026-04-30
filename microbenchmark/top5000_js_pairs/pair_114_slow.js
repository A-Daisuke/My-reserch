const Benchmark = {
    run: function() {
        var FUNCTION_1 = function FUNCTION_1(VAR_1) {
          return function (VAR_2) {
            var VAR_3 = VAR_2.length;
            var VAR_4 = new Array(VAR_3);
            var VAR_5 = 0;
            while (VAR_5 < VAR_3) {
              VAR_4.push(VAR_1(VAR_2[VAR_5], VAR_5, VAR_2));
              VAR_5++;
            }
            return VAR_4;
          };
        };
        var FUNCTION_2 = function FUNCTION_2(VAR_6) {
          return VAR_6 + 5;
        };
        var VAR_7 = new Array(100000).map(function () {
          return Math.floor(Math.random() * 100);
        });
        FUNCTION_1(FUNCTION_2)(VAR_7);
    }
};