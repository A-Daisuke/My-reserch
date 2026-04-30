const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = "";
        var VAR_3;
        var VAR_4;
        var VAR_5;
        for (VAR_3 = 0; VAR_3 < 100; ++VAR_3) {
          VAR_1["user" + VAR_3] = "user" + VAR_3;
        }
        VAR_4 = Object.keys(VAR_1);
        VAR_5 = VAR_4.length;
        for (VAR_3 = 0; VAR_3 < VAR_5; VAR_3++) {
          VAR_2 += VAR_1[VAR_4[VAR_3]];
        }
        var VAR_6 = "";
        for (var VAR_9 of Object.keys(VAR_1)) {
          VAR_6 += VAR_1[VAR_9];
        }
        if (VAR_6 !== VAR_2) console.log("whoa?");
    }
};