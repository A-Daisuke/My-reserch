const Benchmark = {
    run: function() {
        "use strict";
        const VAR_1 = 100000;
        let VAR_2 = 0;
        const VAR_3 = Array.from(new Array(VAR_1), () => VAR_2++);
        if (VAR_3.length !== VAR_1) {
          throw new Error("mismatch!");
        }
        const VAR_4 = VAR_3.reduce((VAR_5, VAR_6) => VAR_5 + VAR_6, 0);
        if (VAR_4 !== 4999950000) {
          throw new Error("Wrong result!");
        }
    }
};