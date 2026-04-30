const Benchmark = {
    run: function() {
        const FUNCTION_1 = (VAR_1, VAR_2) =>
          [...Array(VAR_2 + 1 - VAR_1).keys()].map((VAR_3) => VAR_3 + VAR_1);
        const VAR_4 = 0;
        const VAR_5 = 5000;
        FUNCTION_1(VAR_4, VAR_5);
    }
};