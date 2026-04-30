const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          const VAR_3 = [];
          for (let VAR_4 = 0; VAR_4 < 10; VAR_4++) {
            VAR_3.push(Math.random());
          }
          VAR_1.push(VAR_3);
        }
    }
};