const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = "some short content";
        for (var VAR_3 = 0; VAR_3 < 500; VAR_3++) {
          VAR_1.push("R:" + VAR_2);
        }
        for (VAR_3 = 0; VAR_3 < 500; VAR_3++) {
          VAR_1.push(VAR_2);
        }
        VAR_1.forEach(function (VAR_4) {
          var VAR_5 = /^R:/.test(VAR_4);
        });
    }
};