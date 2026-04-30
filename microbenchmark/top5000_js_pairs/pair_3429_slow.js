const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = "asdaaaaaaaaaaaaaaaaaaasdasdasdasdnmnm,mnbmnasbdfasdf",
          VAR_3 = 0,
          VAR_4 = [],
          VAR_5 = "";
        for (VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_4.push(VAR_2);
        }
        VAR_5 = VAR_4.join("");
    }
};