const Benchmark = {
    run: function() {
        const VAR_1 = [1, 2, 3];
        const VAR_2 = [4, 5, 6];
        for (let VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          const VAR_4 = VAR_1.concat(VAR_2);
        }
    }
};