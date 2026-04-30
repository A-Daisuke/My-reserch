const Benchmark = {
    run: function() {
        const VAR_1 = Array(1000)
          .fill(1)
          .map((VAR_2, VAR_3) => ({
            KEY_1: VAR_3,
            KEY_2: VAR_3 ** Math.random(),
            KEY_3: VAR_3 ** Math.random(),
          }));
        const VAR_4 = {};
        for (let VAR_7 = 0; VAR_7 < VAR_1.length; VAR_7 += 1) {
          VAR_4[VAR_1[VAR_7].KEY_1] = VAR_1[VAR_7];
        }
    }
};