const Benchmark = {
    run: function() {
        for (var VAR_4 = 0; VAR_4 < 50; VAR_4++) {
          var VAR_5 = "";
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            VAR_5 = VAR_5 + "1";
          }
          VAR_5.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
        }
    }
};