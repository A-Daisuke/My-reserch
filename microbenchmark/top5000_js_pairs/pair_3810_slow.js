const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 50; VAR_3++) {
          VAR_2 = VAR_2.concat(VAR_1);
        }
    }
};