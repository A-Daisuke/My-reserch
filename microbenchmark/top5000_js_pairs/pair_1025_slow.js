const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).fill(13);
        const VAR_2 = VAR_1.reduce((VAR_3, VAR_4) => VAR_3 + VAR_4, 0);
    }
};