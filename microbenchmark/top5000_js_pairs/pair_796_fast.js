const Benchmark = {
    run: function() {
        const VAR_1 = 100000;
        Array(VAR_1)
          .fill()
          .map((VAR_2, VAR_3) => VAR_3);
    }
};