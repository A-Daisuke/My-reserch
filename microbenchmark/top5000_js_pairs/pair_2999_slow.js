const Benchmark = {
    run: function() {
        const VAR_1 = Array(1000)
          .fill([[1, 2], [3], [4], [5], [6], [7], [8], [9], [10]])
          .flat();
        VAR_1.flat();
    }
};