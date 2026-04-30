const Benchmark = {
    run: function() {
        const VAR_1 = Array(100000).fill(1);
        const VAR_2 = [];
        for (let VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
          if (VAR_1[VAR_4] % 2) VAR_2.push(VAR_1[VAR_4]);
        }
    }
};