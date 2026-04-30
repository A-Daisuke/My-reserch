const Benchmark = {
    run: function() {
        var VAR_7 = /(\d)(?=(\d{3})+$)/g;
        for (var VAR_4 = 0; VAR_4 < 50; VAR_4++) {
          var VAR_5 = "";
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            VAR_5 = VAR_5 + "1";
          }
          VAR_5.replace(VAR_7, "$1,");
        }
    }
};