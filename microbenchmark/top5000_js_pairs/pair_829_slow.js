const Benchmark = {
    run: function() {
        let VAR_1 = Array(100000).fill(42);
        VAR_1.map((VAR_2) => {
          let VAR_3 = VAR_2 + 1;
        });
    }
};