const Benchmark = {
    run: function() {
        let VAR_1 = new Set();
        let VAR_2 = new Set([0]);
        for (let VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1.add(VAR_3);
        }
        let VAR_4 = new Set(VAR_2.values());
        let VAR_5 = new Set(VAR_1.values());
        for (let VAR_6 of VAR_5) {
          VAR_4.add(VAR_6);
        }
    }
};