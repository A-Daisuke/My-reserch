const Benchmark = {
    run: function() {
        const VAR_1 = 10000;
        let VAR_2 = Array(VAR_1)
          .fill(1)
          .map((VAR_3, VAR_4) => VAR_4);
        const VAR_7 = Array(VAR_1);
        let VAR_8 = 0;
        for (const VAR_9 of VAR_2) {
          VAR_7[VAR_8++] = VAR_9 ** 2;
        }
    }
};