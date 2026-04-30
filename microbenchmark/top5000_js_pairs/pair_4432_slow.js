const Benchmark = {
    run: function() {
        Array(999)
          .fill({ KEY_1: Math.random() })
          .map((VAR_1) => VAR_1.KEY_1)
          .reduce((VAR_2, VAR_3) => Math.max(VAR_2, VAR_3), 0);
    }
};