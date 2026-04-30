const Benchmark = {
    run: function() {
        const VAR_1 = new Array(10000).fill(0).map((VAR_2, VAR_3) => ({ KEY_1: `${VAR_3 % 100}` }));
        const VAR_4 = VAR_1.reduce(
          (VAR_8, VAR_9) => {
            if (!VAR_8.KEY_2[VAR_9.KEY_1]) {
              VAR_8.KEY_3.push(VAR_9);
              VAR_8.KEY_2[VAR_9.KEY_1] = 1;
            }
            return VAR_8;
          },
          {
            KEY_2: {},
            KEY_3: [],
          },
        ).KEY_3;
    }
};