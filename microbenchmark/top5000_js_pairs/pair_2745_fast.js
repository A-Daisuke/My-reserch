const Benchmark = {
    run: function() {
        let VAR_1 = Array(1000)
          .fill(null)
          .map((VAR_2) => ({}));
        const VAR_3 = new Set(VAR_1);
        const VAR_4 = VAR_1[4];
        const VAR_5 = VAR_1[531];
        const VAR_6 = VAR_1[998];
        VAR_1.splice(VAR_1.indexOf(VAR_4), 1);
        VAR_1.splice(VAR_1.indexOf(VAR_5), 1);
        VAR_1.splice(VAR_1.indexOf(VAR_6), 1);
    }
};