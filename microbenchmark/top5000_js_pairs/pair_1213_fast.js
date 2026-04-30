const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push("2014-01-01T23:00:00Z");
        }
        VAR_1.forEach(function (VAR_3) {
          VAR_3.substring(0, 10);
        });
    }
};