const Benchmark = {
    run: function() {
        var VAR_1 = 125000;
        var VAR_2 = Array.apply(null, Array(VAR_1)).map((VAR_3, VAR_4) => VAR_4);
        var VAR_5 = new Set(VAR_2);
        for (let VAR_7 of VAR_5) {
        }
    }
};