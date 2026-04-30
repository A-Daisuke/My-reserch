const Benchmark = {
    run: function() {
        const FUNCTION_1 = () => {};
        const VAR_3 = true;
        const VAR_4 = false;
        const VAR_5 = true;
        FUNCTION_1([...(VAR_3 ? [2] : []), ...(VAR_4 ? [8] : []), ...(VAR_5 ? [3] : [])]);
    }
};