const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        var VAR_3;
        var VAR_4;
        for (VAR_3 = 0; VAR_3 < 100; VAR_3++) VAR_2.push(~~(Math.random() * 1000) - 500);
        VAR_2 = VAR_2.concat(VAR_2.reverse()).concat(VAR_2).concat(VAR_2.reverse());
        VAR_2 = VAR_2.concat(VAR_2.reverse()).concat(VAR_2).concat(VAR_2.reverse());
        VAR_4 = VAR_2.length;
        for (var VAR_5 of VAR_2) VAR_1 = VAR_1.concat(VAR_5);
    }
};