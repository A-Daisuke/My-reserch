const Benchmark = {
    run: function() {
        const VAR_1 = 10000;
        const VAR_2 = new Array(VAR_1).fill(0).map((VAR_3, VAR_4) => VAR_4);
        let VAR_5 = null;
        VAR_5 = VAR_2.map((VAR_6) => Math.pow(VAR_6, 2));
    }
};