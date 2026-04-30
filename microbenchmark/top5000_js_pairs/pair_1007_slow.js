const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(1);
        const VAR_2 = [];
        VAR_1.forEach((VAR_3, VAR_4) => VAR_2.push(VAR_4));
    }
};