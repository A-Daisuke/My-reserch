const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 150; VAR_2++) {
          VAR_1["key-" + VAR_2] = VAR_2;
        }
        var VAR_3;
        Object.keys(VAR_1).forEach(function (VAR_5) {
          VAR_3 = VAR_5;
        });
    }
};