const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1024; VAR_2++) {
          VAR_1.push(Math.random() * 1024);
        }
        var VAR_3 = VAR_1[0];
        for (var VAR_4 = 0, VAR_5 = VAR_1.VAR_5; VAR_2 < VAR_5; VAR_2++) {
          VAR_3 = Math.min(VAR_3, VAR_1[VAR_2]);
        }
    }
};