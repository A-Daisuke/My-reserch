const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(0);
        const FUNCTION_1 = (VAR_2) => VAR_2 + 1;
        VAR_1.map(FUNCTION_1);
    }
};