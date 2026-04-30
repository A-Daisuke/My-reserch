const Benchmark = {
    run: function() {
        let VAR_1 = Array(10)
          .fill(0)
          .map(() =>
            Array(10)
              .fill(0)
              .map(() => Array(10).fill(-1)),
          );
    }
};