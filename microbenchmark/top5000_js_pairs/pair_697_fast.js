const Benchmark = {
    run: function() {
        const VAR_1 = [...Array(40000).keys()];
        const VAR_2 = Array.from(VAR_1);
    }
};