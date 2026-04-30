const Benchmark = {
    run: function() {
        let VAR_1 = new Array(1000).fill(0).map((VAR_2, VAR_3) => VAR_3);
        new Set(VAR_1);
    }
};