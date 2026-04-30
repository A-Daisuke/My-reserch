const Benchmark = {
    run: function() {
        var VAR_1 = new Array(2048);
        var VAR_2 = [];
        var VAR_3 = 64;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          var VAR_5 = 300;
          for (var VAR_6 = 0; VAR_6 < VAR_5; VAR_6++) {
            VAR_2.push(VAR_1[VAR_6]);
          }
        }
    }
};