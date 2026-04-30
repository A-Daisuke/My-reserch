const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2 * VAR_2);
        }
        VAR_1.forEach(function (VAR_3) {
          VAR_3 += 1;
        });
    }
};