const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 <= 1000; VAR_2++) VAR_1.push(VAR_2);
        var FUNCTION_1 = function (VAR_5) {};
        for (var VAR_6 = 0, VAR_7 = VAR_1.length; VAR_2 < VAR_7; VAR_2++) {
          FUNCTION_1(VAR_1[VAR_2]);
        }
    }
};