const Benchmark = {
    run: function() {
        var VAR_1 = "qwertyuiopasdfghjklzxcvbnm";
        var VAR_2;
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3.push(VAR_1[VAR_4 % VAR_1.length]);
        }
        VAR_2 = VAR_3.join("");
    }
};