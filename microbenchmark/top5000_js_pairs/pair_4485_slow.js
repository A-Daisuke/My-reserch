const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1024; VAR_2++) {
          VAR_1.push(Math.random() * 1024);
        }
        var VAR_3 = Math.min.apply(null, VAR_1);
    }
};