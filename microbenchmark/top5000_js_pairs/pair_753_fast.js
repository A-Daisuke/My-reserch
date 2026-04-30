const Benchmark = {
    run: function() {
        var VAR_1 = new Date();
        var VAR_2 = new Date(VAR_1.getTime() + 100 * 24 * 60 * 60 * 1000);
        var VAR_4 = VAR_2.getTime();
        while (VAR_1.getTime() < VAR_4) {
          VAR_1.setMinutes(VAR_1.getMinutes() + 10);
          var VAR_3 = VAR_1.getTime() + " a";
        }
    }
};