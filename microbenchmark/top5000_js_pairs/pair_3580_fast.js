const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1; VAR_2 <= 1000; VAR_2++) VAR_1.push(VAR_2);
        var VAR_4 = VAR_1.slice();
        var VAR_5;
        while ((VAR_5 = VAR_4.pop())) {}
    }
};