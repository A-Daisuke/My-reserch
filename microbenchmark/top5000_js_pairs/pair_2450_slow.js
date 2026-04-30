const Benchmark = {
    run: function() {
        let VAR_1 = 0;
        for (let VAR_2 = 0; VAR_2 < 3000; VAR_2++) {
          VAR_1 += Math.hypot(Math.random(), Math.random());
        }
    }
};