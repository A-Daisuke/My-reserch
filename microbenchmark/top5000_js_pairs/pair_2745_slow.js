const Benchmark = {
    run: function() {
        let VAR_1 = Array(1000)
          .fill(null)
          .map((VAR_2) => ({}));
        const VAR_3 = new Set(VAR_1);
        const VAR_4 = VAR_1[4];
        const VAR_5 = VAR_1[531];
        const VAR_6 = VAR_1[998];
        VAR_1 = VAR_1.filter((VAR_7) => VAR_4 !== VAR_7);
        VAR_1 = VAR_1.filter((VAR_8) => VAR_5 !== VAR_8);
        VAR_1 = VAR_1.filter((VAR_9) => VAR_6 !== VAR_9);
    }
};