const Benchmark = {
    run: function() {
        let VAR_1 = Array(10000);
        let VAR_2 = undefined;
        for (let VAR_4 in VAR_1) {
          VAR_2 = VAR_2 || VAR_4;
        }
    }
};