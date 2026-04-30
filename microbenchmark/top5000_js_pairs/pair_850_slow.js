const Benchmark = {
    run: function() {
        const VAR_1 = new Array(20000).fill(Math.random() * 10);
        VAR_1
          .map((VAR_2) => VAR_2 + 1)
          .filter((VAR_3) => VAR_3 > 5)
          .map((VAR_4) => VAR_4 * 2);
    }
};