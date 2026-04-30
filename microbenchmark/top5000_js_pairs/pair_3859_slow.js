const Benchmark = {
    run: function() {
        const VAR_1 = [...Array(1000).keys()];
        let VAR_2 = 0;
        VAR_1.map((VAR_3) => {
          VAR_2 = VAR_3;
        });
    }
};