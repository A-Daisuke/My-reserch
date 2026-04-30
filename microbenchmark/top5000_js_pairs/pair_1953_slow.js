const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJ";
        var VAR_2 = "";
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_3.push(VAR_1[(Math.random() * 40) | 0]);
        }
        VAR_2 = VAR_3.join("");
    }
};