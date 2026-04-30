const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        var FUNCTION_1 = function (VAR_3) {};
        var VAR_4;
        var VAR_5 = VAR_1.slice();
        while (VAR_5.length) {
          FUNCTION_1(VAR_5[0]);
          FUNCTION_1(VAR_5[1]);
          FUNCTION_1(VAR_5[2]);
          FUNCTION_1(VAR_5[3]);
          FUNCTION_1(VAR_5[4]);
          VAR_5.splice(0, 5);
        }
    }
};