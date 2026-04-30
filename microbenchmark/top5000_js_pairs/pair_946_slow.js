const Benchmark = {
    run: function() {
        for (var VAR_1 = [], VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push("" + VAR_2);
        }
        VAR_1 = VAR_1.join(",");
        function FUNCTION_1(VAR_3) {
          return /^(\d+,)*\d+$/.test(VAR_1);
        }
        function FUNCTION_2(VAR_4) {
          return VAR_1.split(",").every(function (VAR_5) {
            return parseInt(VAR_5) == VAR_5;
          });
        }
        FUNCTION_2(VAR_1);
    }
};