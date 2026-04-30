const Benchmark = {
    run: function() {
        var VAR_1 = 2.78;
        var VAR_2 = 3.65;
        var VAR_3 = Math.PI;
        for (var VAR_4 = 0; VAR_4 < 5000; VAR_4++) var VAR_5 = Math.sqrt(VAR_1 * VAR_1 + VAR_2 * VAR_2 + VAR_3 * VAR_3);
    }
};