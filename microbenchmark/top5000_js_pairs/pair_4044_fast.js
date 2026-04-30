const Benchmark = {
    run: function() {
        const VAR_1 = new Array(1000).fill(undefined);
        const VAR_2 = "element";
        const VAR_3 = [VAR_2].concat(VAR_1);
    }
};