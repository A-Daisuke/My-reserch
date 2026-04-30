const Benchmark = {
    run: function() {
        const VAR_1 = 0;
        const VAR_2 = 10000;
        const VAR_3 = new Map(
          (function* () {
            for (let VAR_4 = VAR_1; VAR_4 < VAR_2; ++VAR_4) {
              yield [VAR_4, VAR_4 % 2 == 0];
            }
          })(),
        );
    }
};