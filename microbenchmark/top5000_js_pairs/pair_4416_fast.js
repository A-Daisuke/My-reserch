const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = [];
        for (var VAR_3 = 1; VAR_3 <= 100; VAR_3++) {
          VAR_1["test" + VAR_3] = "test";
          VAR_2.push(1);
        }
        for (var VAR_10 = 0, VAR_11 = VAR_2.length; VAR_3 < VAR_11; VAR_3++) {
          VAR_2[VAR_3];
        }
    }
};