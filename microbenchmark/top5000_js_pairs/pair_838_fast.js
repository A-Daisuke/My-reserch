const Benchmark = {
    run: function() {
        "use strict";
        const VAR_1 = 100000;
        let VAR_2 = 0;
        const VAR_3 = Array.from(new Array(VAR_1), () => VAR_2++);
        if (VAR_3.length !== VAR_1) {
          throw new Error("mismatch!");
        }
        for (let VAR_7 = 0; VAR_2 < VAR_1; VAR_2++) {}
    }
};