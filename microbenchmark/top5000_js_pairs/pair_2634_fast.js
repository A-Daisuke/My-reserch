const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(Math.floor(Math.random() * 1000));
        }
        var FUNCTION_1 = function (VAR_4) {
          VAR_2 = VAR_4;
        };
        for (var VAR_5 = 0, VAR_6 = VAR_1.length; VAR_5 < VAR_6; VAR_5++) {
          VAR_7 = FUNCTION_1.call(VAR_1[VAR_5], VAR_5, VAR_1[VAR_5]);
        }
    }
};