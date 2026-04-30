const Benchmark = {
    run: function() {
        const FUNCTION_1 = function* (VAR_1, VAR_2, VAR_3 = VAR_4 > VAR_5 ? -1 : 1) {
          if (VAR_3 < 0 ? VAR_1 <= VAR_2 : VAR_1 >= VAR_2) {
            return;
          }
          yield VAR_1;
          return yield* FUNCTION_1(VAR_1 + VAR_3, VAR_2, VAR_3);
        };
        const VAR_6 = [...FUNCTION_1(1, 4000, 33)];
    }
};