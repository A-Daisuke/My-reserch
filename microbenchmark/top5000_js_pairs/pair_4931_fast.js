const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_3 = Math.floor(Math.random() * 100);
        var VAR_7, VAR_8;
        for (var VAR_9 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          if (VAR_1[VAR_2].KEY_1 === VAR_3) {
            VAR_7 = VAR_2;
            VAR_8 = VAR_1[VAR_2];
            break;
          }
        }
    }
};