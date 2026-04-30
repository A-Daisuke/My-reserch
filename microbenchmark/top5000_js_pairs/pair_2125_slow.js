const Benchmark = {
    run: function() {
        let VAR_1 = [];
        let VAR_2;
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.floor(Math.random() * 100));
        }
        VAR_1.sort((VAR_3, VAR_4) => (VAR_4 || Number.MAX_VALUE) - (VAR_3 || Number.MAX_VALUE));
    }
};