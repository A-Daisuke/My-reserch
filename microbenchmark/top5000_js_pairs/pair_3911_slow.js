const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < 5000; VAR_1++) {
          VAR_2.push(VAR_1);
        }
        VAR_2.map(function (VAR_4) {
          VAR_3.push(VAR_4 * 2);
        });
    }
};