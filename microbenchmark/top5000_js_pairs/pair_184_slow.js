const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = Math.pow(10, 5);
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push("item number " + VAR_3);
        }
        var FUNCTION_1 = function (VAR_4) {
          return VAR_4 + " mapped";
        };
        var VAR_5 = VAR_1.map(FUNCTION_1);
    }
};