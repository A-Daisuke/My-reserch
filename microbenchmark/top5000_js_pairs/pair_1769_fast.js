const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 += "1234567890qwertyuiopasdfghjklzxcvbnm";
        }
        var VAR_3 = "";
        var VAR_4;
        var VAR_5;
        VAR_1 = VAR_1.replace(/0/g, "");
    }
};