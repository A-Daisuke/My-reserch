const Benchmark = {
    run: function() {
        const FUNCTION_1 = () => new Array(100000).fill(7);
        const VAR_1 = FUNCTION_1();
        const VAR_2 = FUNCTION_1();
        const VAR_3 = VAR_1.concat(VAR_2);
    }
};