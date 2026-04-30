const Benchmark = {
    run: function() {
        let VAR_1 = Array(100000).fill(42);
        for (let VAR_4 of VAR_1) {
          let VAR_3 = VAR_4 + 1;
        }
    }
};