const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 300000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_1.map((VAR_3) => VAR_3 + 5);
    }
};