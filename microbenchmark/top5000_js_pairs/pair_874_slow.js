const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        let VAR_3 = [];
        for (let VAR_4 of VAR_1) {
          VAR_3.push(VAR_4);
        }
    }
};