const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return;
        };
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 100000; VAR_2 < VAR_3; ++VAR_2) {
          VAR_1.push(new FUNCTION_1());
        }
        var VAR_4 = 0,
          VAR_5 = VAR_1.length;
        while (VAR_2 < VAR_3) {
          VAR_1[VAR_2].FUNCTION_2();
          VAR_2 += 1;
        }
    }
};