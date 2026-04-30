const Benchmark = {
    run: function() {
        const FUNCTION_1 = (VAR_1, VAR_2) =>
          Array(VAR_2 + 1 - VAR_1)
            .fill()
            .map((VAR_3, VAR_4) => VAR_1 + VAR_4);
        const VAR_5 = 0;
        const VAR_6 = 5000;
        FUNCTION_1(VAR_5, VAR_6);
    }
};