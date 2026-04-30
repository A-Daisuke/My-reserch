const Benchmark = {
    run: function() {
        var VAR_1 = new Date("Jan 01 2016");
        var VAR_2 = new Date("Dec 31 2016");
        var VAR_3 = new Date(VAR_1);
        var VAR_4 = VAR_2.getTime();
        while (VAR_3.getTime() <= VAR_4) {
          VAR_3.setDate(VAR_3.getDate() + 1);
        }
    }
};