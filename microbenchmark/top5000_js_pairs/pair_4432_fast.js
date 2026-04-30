const Benchmark = {
    run: function() {
        Math.max(
          ...Array(999)
            .fill({ KEY_1: Math.random() })
            .map((VAR_1) => VAR_1.KEY_1),
        );
    }
};