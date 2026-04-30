const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 1;
        var VAR_3 = 2;
        var VAR_4 = 3;
        var VAR_12 = {};
        VAR_12.VAR_13 = 0;
        VAR_12.VAR_14 = 1;
        VAR_12.VAR_15 = 2;
        VAR_12.VAR_16 = 3;
        var VAR_10 = VAR_12.VAR_13 + VAR_12.VAR_14;
        var VAR_11 = VAR_12.VAR_15 + VAR_12.VAR_16;
    }
};