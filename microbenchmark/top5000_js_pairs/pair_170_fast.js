const Benchmark = {
    run: function() {
        const FUNCTION_1 = () => {};
        const VAR_1 = true;
        const VAR_2 = false;
        const VAR_3 = true;
        const VAR_6 = [10, 23];
        FUNCTION_1(VAR_6);
        FUNCTION_1(VAR_6);
        FUNCTION_1(VAR_6);
    }
};