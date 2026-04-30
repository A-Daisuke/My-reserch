const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = [];
        var VAR_3 = ", ";
        var VAR_4;
        for (var VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) VAR_2.push(VAR_5);
        VAR_4 = VAR_2.reverse().join(VAR_3);
    }
};