const Benchmark = {
    run: function() {
        const VAR_1 = Array(5000)
          .fill()
          .map((VAR_2) => [{ KEY_1: Math.random() }]);
        var VAR_3 = VAR_1.reduce((VAR_4, VAR_5) => VAR_4.concat(VAR_5), []);
    }
};