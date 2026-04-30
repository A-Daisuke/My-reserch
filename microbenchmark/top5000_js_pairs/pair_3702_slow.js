const Benchmark = {
    run: function() {
        var VAR_1 = new Array(5);
        var VAR_2 = new Array(5000);
        var VAR_3 = "";
        for (var VAR_4 = 0; VAR_4 < VAR_2.length; VAR_4++) {
          VAR_3 += String.fromCharCode(VAR_2[VAR_4]);
        }
    }
};