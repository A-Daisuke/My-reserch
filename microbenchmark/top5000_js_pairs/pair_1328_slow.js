const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        var FUNCTION_1 = function (VAR_3) {};
        var VAR_4 = VAR_1.slice();
        while (VAR_4.length) {
          FUNCTION_1(VAR_4.shift());
        }
    }
};