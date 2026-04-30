const Benchmark = {
    run: function() {
        const VAR_1 = "element";
        const VAR_2 = new Array(1000).fill(1);
        const VAR_3 = [VAR_1, ...VAR_2];
    }
};