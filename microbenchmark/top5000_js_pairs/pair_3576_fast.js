const Benchmark = {
    run: function() {
        Array(1000)
          .fill(0)
          .map((VAR_1, VAR_2) => VAR_2);
    }
};