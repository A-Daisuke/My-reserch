const Benchmark = {
    run: function() {
        const VAR_1 = [...Array(40000).keys()];
        const VAR_2 = JSON.parse(JSON.stringify(VAR_1));
    }
};