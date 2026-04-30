const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        VAR_1 = VAR_1.map(function () {
          return Math.random();
        });
        var VAR_4 = 0,
          VAR_5 = VAR_1.length,
          VAR_6;
        for (; VAR_4 < VAR_5; VAR_4++) {
          VAR_6 = VAR_1[VAR_4];
        }
    }
};