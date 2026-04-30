const Benchmark = {
    run: function() {
        const VAR_1 = 100;
        const VAR_2 = 100;
        const VAR_8 = [];
        for (let VAR_9 = 0; VAR_9 < VAR_1; ++VAR_9) {
          for (let VAR_10 = 0; VAR_10 < VAR_2; ++VAR_10) {
            VAR_8.push([VAR_9, VAR_10]);
          }
        }
    }
};