const Benchmark = {
    run: function() {
        const VAR_1 = {};
        const VAR_2 = new Map();
        for (let VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1[`${VAR_3}`] = VAR_3;
          VAR_2.set(`${VAR_3}`, VAR_3);
        }
        Object.entries(VAR_1).forEach((VAR_4) => VAR_4[1]);
    }
};