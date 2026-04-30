const Benchmark = {
    run: function() {
        const FUNCTION_2 = (VAR_8) =>
          VAR_8.map((VAR_9, VAR_10, VAR_11) =>
            VAR_11.reduce(
              (VAR_12, VAR_13, VAR_14) =>
                VAR_9 + VAR_13 + (VAR_14 - VAR_10) > VAR_12 ? VAR_9 + VAR_13 + (VAR_14 - VAR_10) : VAR_12,
              null,
            ),
          ).reduce((VAR_15, VAR_16) => (VAR_16 > VAR_15 ? VAR_16 : VAR_15));
    }
};