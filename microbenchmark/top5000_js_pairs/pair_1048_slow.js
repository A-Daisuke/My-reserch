const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(1);
        const VAR_2 = new Float32Array(100000).fill(1);
        const VAR_3 = VAR_1.reduce((VAR_4, VAR_5) => VAR_4 + VAR_5, 0);
    }
};