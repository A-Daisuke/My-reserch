const Benchmark = {
    run: function() {
        Array(500000)
          .fill(null)
          .map((VAR_1, VAR_2) => Number(VAR_2));
    }
};