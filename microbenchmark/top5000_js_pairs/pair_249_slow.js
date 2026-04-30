const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 += "1234567890qwertyuiopasdfghjklzxcvbnm";
        }
        var VAR_3 = "";
        var VAR_4;
        var VAR_5;
        for (VAR_2 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_5 = VAR_1[VAR_2];
          if (VAR_5 !== "0") VAR_3 += VAR_5;
        }
        VAR_1 = VAR_3;
    }
};