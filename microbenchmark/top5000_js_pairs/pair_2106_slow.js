const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          while (VAR_1.indexOf(VAR_2) >= 0) VAR_1 = VAR_1.replace(VAR_2, VAR_3);
          return VAR_1;
        };
        var VAR_4 = Array(501).join("A");
        var VAR_5 = FUNCTION_1(VAR_4, "A", "%D1");
    }
};