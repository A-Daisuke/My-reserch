const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = [];
        var VAR_3 = [];
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) {
          VAR_2.push(VAR_5);
          VAR_3.push("string-" + VAR_5);
          VAR_4.push({ KEY_1: "object-" + VAR_5 });
        }
        var VAR_6 = true;
        for (var VAR_7 = 0; VAR_5 < VAR_1; VAR_5++) {
          VAR_6 = !!VAR_2[VAR_5];
          VAR_6 = !!VAR_3[VAR_5];
          VAR_6 = !!VAR_4[VAR_5];
        }
        console.log(VAR_6);
    }
};