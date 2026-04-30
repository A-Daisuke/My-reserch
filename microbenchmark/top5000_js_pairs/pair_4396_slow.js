const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.unshift(VAR_2);
        for (var VAR_3 = 0; VAR_2 < 1000; VAR_2++) VAR_1.shift();
    }
};