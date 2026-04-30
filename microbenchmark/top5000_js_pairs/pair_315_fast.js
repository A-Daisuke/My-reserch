const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var FUNCTION_2 = function (VAR_6, VAR_7) {
          return VAR_6 + VAR_7;
        };
        var VAR_3 = VAR_1.reduce(FUNCTION_1, 0);
        function FUNCTION_1(VAR_4, VAR_5) {
          return FUNCTION_2(VAR_3, VAR_5);
        }
        console.log(VAR_3);
    }
};