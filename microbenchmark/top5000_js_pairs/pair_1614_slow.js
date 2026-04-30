const Benchmark = {
    run: function() {
        const VAR_1 = 100;
        const VAR_2 = 100;
        const VAR_3 = VAR_1 * VAR_2;
        const VAR_4 = Array.from(Array(VAR_3).keys());
        VAR_4.map((VAR_5) => {
          const VAR_6 = Math.floor(VAR_5 / VAR_1);
          const VAR_7 = VAR_5 % VAR_1;
          return [VAR_6, VAR_7];
        });
    }
};