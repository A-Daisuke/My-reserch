const Benchmark = {
    run: function() {
        let VAR_1 = Array(10000)
          .fill()
          .map(() => 1);
        let VAR_2 = 0;
        for (let VAR_3 of VAR_1) {
          VAR_2 += VAR_3;
        }
    }
};