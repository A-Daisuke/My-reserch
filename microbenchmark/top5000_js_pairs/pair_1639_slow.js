const Benchmark = {
    run: function() {
        var VAR_1 = [0, 0, 0, 0, 0];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 = VAR_1.splice(1);
          VAR_1.push(1);
        }
    }
};