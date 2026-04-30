const Benchmark = {
    run: function() {
        let VAR_1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
        VAR_1.reduce((VAR_5, VAR_6) => VAR_5 ^ VAR_6);
    }
};