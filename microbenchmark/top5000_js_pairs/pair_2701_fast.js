const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(Math.random());
        }
        var VAR_3 = VAR_1.length;
        VAR_4 = Infinity;
        while (VAR_3--) {
          const VAR_6 = VAR_1[VAR_3];
          if (VAR_6 < VAR_4) {
            VAR_5 = VAR_6;
          }
        }
    }
};