const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0, VAR_4; VAR_3 < 1000; VAR_3++) {
          VAR_4 = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
          VAR_1.push(VAR_4);
          VAR_2.push(VAR_4.toFixed());
        }
        for (var VAR_6 = 0, VAR_7 = VAR_1.length, VAR_9, VAR_8; VAR_3 < VAR_7; ++VAR_3) {
          VAR_9 = VAR_2[VAR_3].substr(-1);
          VAR_8 = VAR_9 === "0" || VAR_9 === "2" || VAR_9 === "4" || VAR_9 === "6" || VAR_9 === "8";
        }
    }
};