const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000);
        VAR_1
          .map(() => Math.floor(Math.random() * 499) + 1)
          .map((VAR_2) => VAR_2 / 2)
          .filter((VAR_3) => Math.floor(VAR_3) === VAR_3);
    }
};