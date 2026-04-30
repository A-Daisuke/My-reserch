const Benchmark = {
    run: function() {
        let VAR_1 = Array(10000)
          .fill()
          .map(() => 1);
        let VAR_2 = 0;
        let VAR_4 = 0;
        let VAR_5 = 0;
        for (VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; VAR_4++) {
          VAR_2 += VAR_1[VAR_4];
        }
    }
};