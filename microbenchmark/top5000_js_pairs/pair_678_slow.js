const Benchmark = {
    run: function() {
        const VAR_1 = [...new Array(100000).keys()];
        const FUNCTION_1 = (VAR_2) => VAR_2 + 1;
        const FUNCTION_2 = (VAR_3) => VAR_3 + 2;
        const FUNCTION_3 = (VAR_4) => VAR_4 + 3;
        const VAR_5 = VAR_1.map(FUNCTION_1).map(FUNCTION_2).map(FUNCTION_3);
    }
};