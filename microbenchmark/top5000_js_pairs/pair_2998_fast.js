const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        let VAR_6 = VAR_1.VAR_6;
        let VAR_7 = new Array(VAR_6);
        while (VAR_6--) {
          const VAR_8 = VAR_1[VAR_6];
          VAR_7[VAR_9] = VAR_8;
        }
    }
};