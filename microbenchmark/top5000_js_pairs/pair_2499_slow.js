const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(new Array(10000).keys());
        let VAR_2 = 0;
        VAR_2 = VAR_1.reduce((VAR_3, VAR_4) => VAR_3 + VAR_4, 0);
    }
};