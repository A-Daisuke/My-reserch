const Benchmark = {
    run: function() {
        const VAR_1 = [...new Array(500)].map((VAR_2, VAR_3) => VAR_3 + 1);
        const VAR_4 = VAR_1.map(function (VAR_5) {
          return {
            KEY_1: VAR_5,
            KEY_2: VAR_5 + 1 + "",
          };
        });
    }
};