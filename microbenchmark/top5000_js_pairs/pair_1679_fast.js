const Benchmark = {
    run: function() {
        const FUNCTION_1 = function* (VAR_1, VAR_2, VAR_3 = VAR_4 > VAR_5 ? -1 : 1) {
          let VAR_7 = VAR_1;
          while (VAR_7 < VAR_2) {
            yield VAR_7;
            VAR_7 += VAR_3;
          }
          return;
        };
        const VAR_6 = [...FUNCTION_1(1, 4000, 33)];
    }
};