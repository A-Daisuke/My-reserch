const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100; VAR_2++)
          VAR_1.push({
            KEY_1: `test-${VAR_2}`,
            KEY_2: false,
          });
        function FUNCTION_1(VAR_3) {
          let VAR_4 = {};
          const VAR_5 = VAR_3.reduce((VAR_6, VAR_7) => {
            VAR_6[VAR_7.KEY_1] = VAR_7.KEY_2;
            return VAR_6;
          }, VAR_4);
        }
        FUNCTION_1(VAR_1);
    }
};