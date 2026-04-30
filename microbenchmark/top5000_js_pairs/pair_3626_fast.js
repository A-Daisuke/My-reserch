const Benchmark = {
    run: function() {
        var VAR_2 = 0,
          VAR_3 = 1,
          VAR_4 = 0,
          VAR_5 = 15,
          VAR_6 = [0, 1];
        do {
          VAR_6.push((VAR_2 = VAR_4 + VAR_3));
          VAR_4 = VAR_3;
          VAR_3 = VAR_2;
        } while (VAR_2 < VAR_5);
    }
};