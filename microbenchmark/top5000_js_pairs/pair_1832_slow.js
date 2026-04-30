const Benchmark = {
    run: function() {
        let VAR_1 = Array(10000)
          .fill()
          .map(() => 1);
        let VAR_2 = 0;
        VAR_1.forEach((VAR_3) => (VAR_2 += VAR_3));
    }
};