const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = "false";
        do {
          VAR_1 += 1;
          VAR_2 == "false" ? false : true;
        } while (VAR_1 < 100);
    }
};