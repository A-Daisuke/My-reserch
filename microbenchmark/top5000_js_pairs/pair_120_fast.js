const Benchmark = {
    run: function() {
        const VAR_1 = new Map();
        const VAR_3 = 100000;
        for (let VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          VAR_1.set(VAR_4, {
            KEY_1: VAR_4,
            KEY_3: { KEY_2: VAR_4 + 1 },
          });
        }
    }
};