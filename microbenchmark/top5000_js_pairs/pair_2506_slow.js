const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6];
        var VAR_2 = VAR_1.join(",");
        var VAR_3 = JSON.stringify(VAR_1);
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_2.split(",");
        }
    }
};