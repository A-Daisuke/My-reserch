const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 5000; VAR_2++) VAR_1 = VAR_1.concat(["1", "2"]);
    }
};