const Benchmark = {
    run: function() {
        for (var VAR_1 = [], VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push("" + VAR_2);
        }
        VAR_1 = VAR_1.join(",");
        var VAR_3 = (function () {
          var VAR_4 = /^(\d+,)*\d+$/;
          return function (VAR_5) {
            return VAR_4.test(VAR_1);
          };
        })();
        function FUNCTION_1(VAR_6) {
          return VAR_1.split(",").every(function (VAR_7) {
            return parseInt(VAR_7) == VAR_7;
          });
        }
        FUNCTION_1(VAR_1);
    }
};