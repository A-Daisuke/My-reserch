const Benchmark = {
    run: function() {
        let VAR_1 = Array.from(Array(10), () =>
          Array.from(Array(10), () => Array.from(Array(10), () => -1)),
        );
    }
};