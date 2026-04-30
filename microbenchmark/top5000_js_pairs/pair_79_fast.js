const Benchmark = {
    run: function() {
        const VAR_1 = Array(5000)
          .fill()
          .map((VAR_2) => [{ KEY_1: Math.random() }]);
        var VAR_3 = VAR_1.flat();
    }
};