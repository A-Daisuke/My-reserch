const Benchmark = {
    run: function() {
        let VAR_1 = Array(10000);
        let VAR_2 = undefined;
        VAR_1.forEach((VAR_3) => {
          VAR_2 = VAR_2 || VAR_3;
        });
    }
};