const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.random());
        }
        const FUNCTION_1 = (VAR_3, VAR_4, VAR_5) => {
          var VAR_6 = [];
          for (var VAR_7 = 0; VAR_2 < VAR_3.length; VAR_2++) {
            if (VAR_4(VAR_3[VAR_2])) {
              VAR_6.push(VAR_5(VAR_3[VAR_2]));
            }
          }
        };
        const FUNCTION_2 = (VAR_8, VAR_9) => {
          VAR_3.push(VAR_9);
          return VAR_8;
        };
        const VAR_10 = VAR_1.reduce((VAR_11, VAR_12) => (VAR_12 >= 0.5 ? VAR_11.concat(VAR_12 * 2) : VAR_11), []);
    }
};