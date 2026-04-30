const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(Array(10000).keys());
        const FUNCTION_1 = (VAR_2) => VAR_2 * VAR_2;
        const FUNCTION_2 = (VAR_3) => VAR_3 * VAR_3 * VAR_3;
        let VAR_4 = VAR_1.map((VAR_5) => FUNCTION_1(VAR_5));
        let VAR_6 = VAR_1.map((VAR_7) => FUNCTION_2(VAR_7));
    }
};