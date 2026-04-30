const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: "AFULL",
          KEY_2: "BFULL",
          KEY_3: "CFULL",
        };
        var VAR_2 = new Array();
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.push({
            KEY_4: "Test",
            KEY_5: "Test2",
            KEY_6: "Test3",
          });
        }
        for (var VAR_4 = 0; VAR_4 < VAR_2.length; VAR_4++) {
          var VAR_5 = VAR_2[VAR_4];
          VAR_5[VAR_1["a"]] = VAR_5["a"];
          VAR_5[VAR_1["b"]] = VAR_5["b"];
          VAR_5[VAR_1["c"]] = VAR_5["c"];
        }
    }
};