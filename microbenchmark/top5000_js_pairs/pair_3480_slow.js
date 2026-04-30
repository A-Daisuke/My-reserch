const Benchmark = {
    run: function() {
        const VAR_1 = new Uint32Array(1000).map((VAR_2, VAR_3) => VAR_3);
        const VAR_4 = Array.from(VAR_1, (VAR_5) => VAR_5 * VAR_5);
    }
};