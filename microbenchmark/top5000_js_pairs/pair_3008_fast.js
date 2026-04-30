const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        const VAR_6 = VAR_1.VAR_6;
        let VAR_7 = new Array(VAR_6);
        for (let VAR_4 = VAR_6 - 1; VAR_4 >= 0; VAR_4--) {
          let VAR_5 = VAR_1[VAR_4];
          VAR_7[VAR_8] = VAR_5;
        }
    }
};