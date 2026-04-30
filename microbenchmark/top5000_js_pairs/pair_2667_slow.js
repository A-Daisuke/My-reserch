const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1 += "a,";
        }
        var VAR_3 = /[^,]*,/g;
        var VAR_4 = [];
        var VAR_5 = "";
        while ((VAR_5 = VAR_3.exec(VAR_1)) !== null) {
          VAR_4.push(VAR_5);
        }
    }
};