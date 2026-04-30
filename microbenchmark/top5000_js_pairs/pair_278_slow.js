const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(Math.random() * 10000);
        VAR_3 = VAR_1.slice().sort();
        VAR_1.sort();
    }
};