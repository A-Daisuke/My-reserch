const Benchmark = {
    run: function() {
        var VAR_1 = new Map();
        const VAR_2 = new Map();
        const VAR_3 = new Map();
        const VAR_4 = [VAR_1, VAR_2, VAR_3];
        for (let VAR_5 in VAR_4) {
          const VAR_6 = VAR_4[VAR_5];
          for (let VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
            VAR_6.set(`Map ${VAR_5} key ${VAR_7}`, VAR_7);
          }
        }
        const VAR_10 = new Map([...VAR_1, ...VAR_2, ...VAR_3]);
    }
};