const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1 += VAR_2.toString();
        }
        var VAR_3 = VAR_1.VAR_3;
        var FUNCTION_1 = function (VAR_4, VAR_5) {
          return VAR_1.charAt(VAR_3 - 1);
        };
        FUNCTION_1(VAR_1, VAR_3);
    }
};