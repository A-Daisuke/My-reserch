const Benchmark = {
    run: function() {
        var VAR_1 = "2014-02-26T00:18:00.299Z";
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 6000; VAR_3++) {
          VAR_2.push(VAR_1);
        }
        var VAR_4 = VAR_2.sort(function (VAR_5, VAR_6) {
          return VAR_5 < VAR_6 ? 1 : 0;
        });
    }
};