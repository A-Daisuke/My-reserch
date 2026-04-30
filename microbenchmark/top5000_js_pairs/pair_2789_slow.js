const Benchmark = {
    run: function() {
        const FUNCTION_1 = (VAR_1) =>
          Array(VAR_1)
            .fill()
            .map((VAR_2, VAR_3) => VAR_3);
        const VAR_4 = FUNCTION_1(1000);
        VAR_4.reduce(
          (VAR_5, VAR_6) => [...VAR_5, ...((VAR_6 * VAR_6) % 13 === 9 ? [VAR_6 * VAR_6] : [])],
          [],
        );
    }
};