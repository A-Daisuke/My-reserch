const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000).fill(1).map(Math.random);
        var VAR_2 = VAR_1.map((VAR_3) => VAR_3.toString());
        var VAR_4 = VAR_1.map((VAR_5) => Math.ceil(Number.MAX_SAFE_INTEGER * VAR_5));
        var VAR_6 = new Set(VAR_1);
        var VAR_7 = VAR_1.map((VAR_8) => VAR_6.has(VAR_8));
    }
};