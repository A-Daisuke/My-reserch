const Benchmark = {
    run: function() {
        var VAR_1 = "";
        var VAR_2 = 0;
        while (true) {
          VAR_1 = VAR_1.concat(VAR_2);
          VAR_2++;
          if (VAR_2 >= 100000) {
            break;
          }
        }
    }
};