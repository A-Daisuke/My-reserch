const Benchmark = {
    run: function() {
        const VAR_1 = 5000;
        const VAR_2 = new Array(VAR_1).fill(0);
        const VAR_3 = VAR_2.map((VAR_4) => VAR_4);
    }
};