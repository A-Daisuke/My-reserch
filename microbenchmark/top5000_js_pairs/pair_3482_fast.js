const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        let VAR_6 = 0;
        for (const VAR_7 of VAR_1) {
          VAR_6 += 3 * VAR_7 ** 2;
        }
    }
};