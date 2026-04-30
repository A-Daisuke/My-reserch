const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        VAR_1 = VAR_1.filter(function (VAR_4) {
          return typeof VAR_4 !== "undefined";
        });
    }
};