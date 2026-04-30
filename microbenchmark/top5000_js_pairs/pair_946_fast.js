const Benchmark = {
    run: function() {
        for (var VAR_1 = [], VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push("" + VAR_2);
        }
        VAR_1 = VAR_1.join(",");
        function FUNCTION_1(VAR_3) {
          return /^(\d+,)*\d+$/.test(VAR_1);
        }
        var VAR_6 = (function () {
          var VAR_7 = /^(\d+,)*\d+$/;
          return function (VAR_8) {
            return VAR_7.test(VAR_1);
          };
        })();
        VAR_6(VAR_1);
    }
};