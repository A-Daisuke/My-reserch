const Benchmark = {
    run: function() {
        const VAR_1 = [...new Array(100000).keys()];
        const FUNCTION_1 = (VAR_2) => VAR_2 + 1;
        const FUNCTION_2 = (VAR_3) => VAR_3 + 2;
        const FUNCTION_3 = (VAR_4) => VAR_4 + 3;
        var FUNCTION_4 = (VAR_6) => FUNCTION_3(FUNCTION_2(FUNCTION_1(VAR_6)));
        const VAR_5 = VAR_1.map(FUNCTION_4);
    }
};