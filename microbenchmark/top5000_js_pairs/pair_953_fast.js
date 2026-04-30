const Benchmark = {
    run: function() {
        VAR_1 = Array(100000)
          .fill(0)
          .map((VAR_2, VAR_3) => VAR_3);
        const VAR_4 = VAR_1.map((VAR_6) => VAR_6);
    }
};