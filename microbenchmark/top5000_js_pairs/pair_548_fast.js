const Benchmark = {
    run: function() {
        let VAR_1 = 10 ** 5;
        let VAR_2 = Array.from(Array(VAR_1).keys());
        VAR_2 = VAR_2.map((VAR_3) => {
          return { KEY_1: VAR_3 };
        });
        let VAR_4 = [];
        for (let VAR_6 of VAR_2) {
          VAR_4.push(VAR_6);
        }
    }
};