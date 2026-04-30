const Benchmark = {
    run: function() {
        const VAR_1 = [];
        let VAR_2 = 0;
        while (VAR_1.length < 100000) {
          VAR_1.push({
            KEY_1: "sample",
            KEY_2: VAR_2,
          });
          VAR_2++;
        }
        VAR_1.findIndex((VAR_3) => VAR_3.KEY_2 === 98000);
    }
};