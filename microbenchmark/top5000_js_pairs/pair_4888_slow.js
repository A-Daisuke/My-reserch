const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3 * 2);
        }
        VAR_2.forEach(function (VAR_4) {
          VAR_1.push(VAR_4);
        });
    }
};