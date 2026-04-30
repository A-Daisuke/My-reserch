const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        for (
          var VAR_3 = 0, VAR_4 = 0;
          VAR_3 < 60000 && VAR_4 < 4;
          VAR_4++, VAR_3 = VAR_4 == 4 ? VAR_3 + 1 : VAR_3, VAR_4 = VAR_4 == 4 ? (VAR_4 = 0) : VAR_4
        ) {
          VAR_1 = VAR_3;
          VAR_2 = VAR_4;
        }
    }
};