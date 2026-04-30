const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 10000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push({
            KEY_1: "item-" + VAR_3,
            KEY_2: VAR_3,
          });
        }
        var VAR_4 = "item-516";
        var VAR_5;
        for (var VAR_7 = 0; VAR_3 < VAR_2; VAR_3++) {
          if (VAR_1[VAR_3].KEY_1 === VAR_4) {
            VAR_5 = VAR_1[VAR_2];
            break;
          }
        }
    }
};