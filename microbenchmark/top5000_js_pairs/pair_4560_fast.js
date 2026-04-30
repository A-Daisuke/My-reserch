const Benchmark = {
    run: function() {
        const VAR_1 = new Array(800).fill({ KEY_1: "asd" });
        for (let VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
          const VAR_5 = VAR_1[VAR_4];
        }
    }
};