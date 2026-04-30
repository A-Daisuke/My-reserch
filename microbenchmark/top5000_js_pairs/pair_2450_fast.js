const Benchmark = {
    run: function() {
        let VAR_1 = 0;
        for (let VAR_2 = 0; VAR_2 < 3000; VAR_2++) {
          VAR_1 += Math.sqrt(Math.random() ** 2 + Math.random() ** 2);
        }
    }
};