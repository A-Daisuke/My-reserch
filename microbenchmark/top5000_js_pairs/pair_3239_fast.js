const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        var VAR_8 = VAR_1.map(function (VAR_9) {
          return VAR_9 * 2;
        });
    }
};