const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = {};
        var VAR_3 = 0,
          VAR_4 = 1000;
        for (; VAR_3 < VAR_4; VAR_3++) {
          var VAR_5 = Math.random();
          VAR_1.push(VAR_5);
          VAR_2["key" + VAR_3] = VAR_5;
        }
        var FUNCTION_1 = function (VAR_6, VAR_7) {
          var VAR_8 = 0,
            VAR_9 = VAR_6.length;
          for (; VAR_3 < VAR_9; VAR_3++) {
            VAR_7.call(VAR_6, VAR_6[VAR_3], VAR_3);
          }
        };
        VAR_1.forEach(function (VAR_11, VAR_12) {
          VAR_5 += 1;
        });
    }
};