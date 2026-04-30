const Benchmark = {
    run: function() {
        "use strict";
        const VAR_1 = Array.from(Array(100).keys());
        const FUNCTION_1 = (VAR_2) => {
          const VAR_3 = {
            KEY_1: VAR_2 % 3 === 0,
            KEY_2: VAR_2 % 5 === 0,
          };
          return Object.keys(VAR_3)
            .filter((VAR_4) => VAR_3[VAR_4])
            .reduce((VAR_5, VAR_6) => {
              return `${VAR_5}${VAR_6}`;
            }, "");
        };
        VAR_1.map((VAR_7) => FUNCTION_1(VAR_7));
    }
};