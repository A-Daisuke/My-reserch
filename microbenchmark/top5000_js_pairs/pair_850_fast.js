const Benchmark = {
    run: function() {
        const VAR_1 = new Array(20000).fill(Math.random() * 10);
        for (let VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
          let VAR_6 = VAR_1[VAR_5];
          VAR_6 = VAR_6 + 1;
          if (VAR_6 > 5) {
            VAR_6 = VAR_6 * 2;
          }
        }
    }
};