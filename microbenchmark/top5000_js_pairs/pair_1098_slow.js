const Benchmark = {
    run: function() {
        var FUNCTION_1 = function FUNCTION_1(VAR_1) {
          return function (VAR_2) {
            var VAR_3 = [];
            for (var VAR_4 = 0; VAR_4 < VAR_2.length; VAR_4++) {
              VAR_3.push(VAR_1(VAR_2[VAR_4], VAR_4, VAR_2));
            }
            return VAR_3;
          };
        };
        var FUNCTION_2 = function FUNCTION_2(VAR_5) {
          return VAR_5 + 5;
        };
        var VAR_6 = new Array(100000).map(function () {
          return Math.floor(Math.random() * 100);
        });
        FUNCTION_1(FUNCTION_2)(VAR_6);
    }
};