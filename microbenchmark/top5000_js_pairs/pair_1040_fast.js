const Benchmark = {
    run: function() {
        let VAR_1 = 0.1;
        let VAR_2 = [];
        while (VAR_1 < 50000) {
          VAR_2.push(VAR_1.toString());
          VAR_2.push(VAR_1 + 1);
          VAR_1 += 2;
        }
        VAR_2.map((VAR_3) => parseFloat(VAR_1));
    }
};