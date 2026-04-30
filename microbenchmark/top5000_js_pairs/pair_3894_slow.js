const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = 5000;
        do {
          VAR_1.push(VAR_2);
        } while (++VAR_2 < VAR_3);
        VAR_4 = [1, 2, 3];
        for (VAR_2 = 0, VAR_3 = VAR_1.length; VAR_2 < VAR_3; ++VAR_2) {
          VAR_4.push(VAR_1[VAR_2]);
        }
    }
};