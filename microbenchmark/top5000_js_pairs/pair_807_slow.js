const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2) {
          return Math.floor(VAR_1 + (1 + VAR_2 - VAR_1) * Math.random());
        };
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 100000; ++VAR_4) {
          VAR_3.push({ KEY_1: FUNCTION_1() });
        }
        var VAR_5 = [2, 3, 6];
        VAR_3.reduce(function (VAR_6, VAR_7) {
          if (VAR_5.indexOf(VAR_7.KEY_1)) VAR_6.push(VAR_7);
          return VAR_6;
        }, []);
    }
};