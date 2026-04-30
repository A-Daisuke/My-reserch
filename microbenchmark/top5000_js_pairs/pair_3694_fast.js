const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        Array.apply(null, Array(VAR_1)).map((VAR_2, VAR_3) => VAR_3);
    }
};