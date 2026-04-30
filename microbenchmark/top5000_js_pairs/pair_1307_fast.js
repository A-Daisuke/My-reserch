const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        var FUNCTION_1 = function (VAR_3) {};
        var VAR_5 = VAR_1.slice();
        while (VAR_5.length) {
          FUNCTION_1(VAR_5.shift());
        }
    }
};