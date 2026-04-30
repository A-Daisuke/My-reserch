const Benchmark = {
    run: function() {
        var VAR_1 = 20000000;
        var VAR_2 = VAR_1 / 28.35;
        var VAR_3 = 0;
        VAR_3 = Math.floor(VAR_2 / 16);
        VAR_2 = VAR_2 - VAR_3 * 16;
    }
};