const Benchmark = {
    run: function() {
        var FUNCTION_1 = (VAR_1, VAR_2) => ({
          KEY_1: [true, false][VAR_2 % 2 === 0 ? 0 : 1],
          KEY_2: Math.ceil(Math.random() * 10000) + 1,
        });
        const VAR_3 = 1000;
        var VAR_4 = Array(VAR_3).fill(null).map(FUNCTION_1);
        const VAR_5 = VAR_4.reduce((VAR_6, VAR_7) => {
          if (VAR_7.KEY_1) {
            VAR_6.push(VAR_7.KEY_2);
          }
          return VAR_6;
        }, []);
    }
};