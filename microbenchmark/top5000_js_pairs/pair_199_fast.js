const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).fill(0).map((VAR_2, VAR_3) => VAR_3);
        VAR_1.map((VAR_5) => (VAR_5 % 2 !== 0 ? 0 : VAR_5 / 4 + 1));
    }
};