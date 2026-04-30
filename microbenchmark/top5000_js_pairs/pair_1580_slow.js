const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100001; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 10000));
        }
        Math.max(...VAR_1);
    }
};