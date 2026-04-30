const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push(Math.floor(Math.random() * VAR_1) + "");
        }
        var VAR_4 = VAR_2.length;
        var VAR_5 = VAR_2[Math.floor(Math.random() * VAR_4)];
        var VAR_6 = -1;
        for (var VAR_7 = 0; VAR_7 < VAR_4; VAR_7++) {
          if (VAR_2[VAR_7] == VAR_5) {
            VAR_6 = VAR_7;
            break;
          }
        }
    }
};