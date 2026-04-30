const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: "asdf",
          });
        }
        var VAR_3 = 9876;
        for (var VAR_6 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          var VAR_7 = VAR_1[VAR_2];
          if (VAR_7.KEY_1 === VAR_3) {
            break;
          }
        }
    }
};