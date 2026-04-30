const Benchmark = {
    run: function() {
        const VAR_1 = new Array(10000).fill(0).map((VAR_2, VAR_3) => ({ KEY_1: `${VAR_3 % 100}` }));
        const VAR_4 = VAR_1.reduce((VAR_5, VAR_6) => {
          !VAR_5.some((VAR_7) => VAR_7.KEY_1 === VAR_6.KEY_1) && VAR_5.push(VAR_6);
          return VAR_5;
        }, []);
    }
};