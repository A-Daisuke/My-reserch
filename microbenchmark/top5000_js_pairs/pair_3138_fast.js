const Benchmark = {
    run: function() {
        const VAR_1 = [...Array(100)].map((VAR_2) => ~~(Math.random() * 100));
        const FUNCTION_1 = (VAR_3) => {
          const VAR_4 = VAR_3.length;
          let VAR_5 = null;
          for (let VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            for (let VAR_7 = VAR_6; VAR_7 < VAR_4; VAR_7++) {
              if (VAR_3[VAR_6] + VAR_3[VAR_7] + (VAR_7 - VAR_6) > VAR_5) {
                VAR_5 = VAR_3[VAR_6] + VAR_3[VAR_7] + (VAR_7 - VAR_6);
              }
            }
          }
          return VAR_5;
        };
        FUNCTION_1(VAR_1);
    }
};