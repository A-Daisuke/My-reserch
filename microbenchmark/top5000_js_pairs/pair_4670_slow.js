const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          const VAR_3 = Array(10);
          VAR_3[0] = Math.random();
          VAR_3[1] = Math.random();
          VAR_3[2] = Math.random();
          VAR_3[3] = Math.random();
          VAR_3[4] = Math.random();
          VAR_3[5] = Math.random();
          VAR_3[6] = Math.random();
          VAR_3[7] = Math.random();
          VAR_3[8] = Math.random();
          VAR_3[9] = Math.random();
          VAR_1.push(VAR_3);
        }
    }
};